/* eslint-disable new-cap */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this enforces a schema..so if you save a task
//   with other props won't be saved

const gameSchema = new Schema({
  name: String,
  timeLeft: Number,
  word: String,
  guesses: [String],
  didWin: { type: Boolean, default: false },
});


module.exports = mongoose.model('Game', gameSchema);
