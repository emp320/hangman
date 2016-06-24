/* eslint-disable new-cap */
const fs = require('fs');

function Word(){
}

Word.getWord = function(){
  const wordFile = '/Users/localadmin/workspace/hangman/data/web2';
  const words = fs.readFileSync(wordFile, { encoding: 'utf8' });
  const wordArray = words.split('\n');
  const i = Math.floor(Math.random() * wordArray.length)
  const word = wordArray[i];
  return word;
};

module.exports = Word;
