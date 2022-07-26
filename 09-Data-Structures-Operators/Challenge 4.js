'use strict';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const toCamelCase = function () {
  const recievedData = document.querySelector(`textarea`).value;

  const dataArray = recievedData.split('\n');
  const dataLower = [];
  let counter = 0;

  for (const word of dataArray) {
    dataLower.push(word.trim().toLowerCase().split('_'));
  }

  const wordsLength = [];

  for (const [word1, word2] of dataLower) {
    const together = word1 + word2;
    wordsLength.push(together.length);
  }

  const maxLength = Math.max(...wordsLength);

  for (const [word1, word2] of dataLower) {
    counter++;
    const changeWord2 = word2.slice(0, 1).toUpperCase() + word2.slice(1);
    const fullWord = `${word1}${changeWord2}`;
    console.log(
      `${fullWord.padEnd(maxLength + 3, ' ')} ${`✅`.repeat(counter)}`
    );
  }
};

document.querySelector(`button`).addEventListener(`click`, toCamelCase);
