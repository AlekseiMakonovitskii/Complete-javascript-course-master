`use strict`;

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes(`Sarah`));
console.log(sarahsDog);

console.log(
  sarahsDog.curFood < sarahsDog.recommendedFood
    ? `Sarah's dog eats too little`
    : `Sarah's dog eats too much!`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(` and `)}'s dogs eat too Little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = function (dog) {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
};

console.log(dogs.some(checkEatingOkay));

// 7.
const okayAmount = dogs.filter(checkEatingOkay);
console.log(okayAmount.length);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
