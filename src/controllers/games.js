/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';
import Word from '../models/word';
import GameViewModel from '../models/GameViewModel';

router.post('/', (req, res) => {
   const word = Word.getWord();
   const l = word.length;
   console.log(`WORD: ${word} LENGTH: ${l}`);
  const g = new Game(req.body);
  g.word = word;
  g.timeLeft = 999;
  const gvm =
    new GameViewModel(
      g.name,
      g.timeLeft,
      l,
      g.guesses,
      g.didWin);

  g.save(() => {
    res.send(gvm);
  });
});

router.put('/:id/flip', (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    const o = {};
    const n = req.body.num * 1;

    if (n) {
      o.heads = game.heads + 1;
    } else {
      o.tails = game.tails + 1;
    }

    game.update(o, () => {
      Game.findById(req.params.id, (err1, game1) => {
        res.send(game1);
      });
    });
  });
});
