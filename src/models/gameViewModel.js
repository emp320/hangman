/* eslint-disable new-cap */

function GameViewModel(name, timeLeft, wordLength, guesses, didWin) {
  this.name = name;
  this.timeLeft = timeLeft;
  this.wordLength = wordLength;
  this.guesses = guesses;
  this.didWin = didWin;
}

module.exports = GameViewModel;
