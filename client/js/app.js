console.log('app.js loaded!');

var wordList = ['piggy', 'avocado', 'showboard', 'chrome'];

angular.module('hangmanApp', [])
.controller('hangmanController', hangmanController);

function hangmanController() {
  console.log('hangmanController online');
  this.controllerWorks = true;

  var vm = this;

  vm.game = new HangmanGame(wordList.pop());
  vm.makeGuess = function() {
    if(vm.newGuess) {
      vm.game.guess(vm.newGuess);
      vm.newGuess = '';
      vm.check();
    }
  };

  vm.check = function() {
    var status = vm.game.checkGameWinStatus();
    if(status === 'WIN' || status === 'LOSE') {
      status === 'WIN' ? alert("You win!") : alert("You lose!");
      vm.game = new HangmanGame(wordList.pop());
    }
  }

}
