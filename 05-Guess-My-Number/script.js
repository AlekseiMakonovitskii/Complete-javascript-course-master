'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent  = 18;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // when there no input
  if (!guess) {
    displayMessage(`⛔ No number!`);
    // document.querySelector(`.message`).textContent = `⛔ No number!`;
    return;
  }

  // when player wins
  if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    // document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    return;
  }

  // when guess is wrong
  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      // document.querySelector(`.message`).textContent = guess > secretNumber ? `📈 Too high!` : `📉 Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).
      // textContent = `😥 you lost the game!`;
      displayMessage(`😥 you lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }

    return;
  }

  // when guess it too high
  // if (guess > secretNumber) {
  // 	if (score > 1) {
  //     document.querySelector(`.message`).textContent = `📈 Too high!`
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  // 		return;
  //   } else {
  //     document.querySelector(`.message`).textContent = `😥 you lost the game!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // 	return;
  // }

  // // when guess is too low
  // if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `📉 Too low!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //     return;
  //   } else {
  //     document.querySelector(`.message`).textContent = `😥 you lost the game!`;
  //     document.querySelector(`.score`).textContent = 0;
  //     return;
  //   }
  // }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector(`.score`).textContent = score;
  displayMessage(`Start guessing...`);
  // document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
});
