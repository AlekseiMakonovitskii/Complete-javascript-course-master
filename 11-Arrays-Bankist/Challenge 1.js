`use strict`;
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  // 1.
  const dogsJuliaCorrected = dogsJulia.slice(1, dogsJulia.length - 2);
  // 2.
  const bothData = dogsJuliaCorrected.concat(dogsKate);
  console.log(bothData);
  // 3.
  bothData.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs(dogsJulia, dogsKate);
