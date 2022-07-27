'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const answer = Number(
    prompt(
      `${this.question}\n${[...this.options].join(`\n`)}\n(Write option number`
    )
  );

  if (typeof answer === 'number' && answer < this.answers.length) {
    this.answers[answer]++;
  } else {
    console.log(`This number doesn't make sense`);
  }

  this.displayResults();
  this.displayResults(`string`);
};

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = `array`) {
  if (type === `array`) {
    console.log(this.answers);
    return;
  }

  if (type === `string`) {
    console.log(`Poll results are ${[...this.answers]}.`);
    return;
  }
};

// var answers =  [5, 2, 3];
// var answers = [1, 5, 3, 9, 6, 1];
// const displayResultsWindow = poll.displayResults.bind(window);

// displayResultsWindow('string');

poll.displayResults.call({ answers: [5, 2, 3] }, `string`);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, `string`);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
