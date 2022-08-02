const calcAverageHumanAge = function (dogs) {
  // 1.
  const humanAges = dogs.map(dogAge => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });

  // 2.
  const adultDogs = humanAges.filter(age => age >= 18);
  // 3.
  const average = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
