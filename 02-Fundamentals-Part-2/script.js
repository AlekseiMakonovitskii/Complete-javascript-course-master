'use strict';
// LECTURE

// STRICT MODE

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
// 	hasDriversLicense = true;
// };

// if (hasDriversLicense) {
// 	console.log(`I can drive 🚗`);
// };

// const interface = 'Audio';
// const private = 534;

// FUNCTIONS

// function logger() {
// 	console.log(`My name is Jonas`);
// } 

// //calling, running, invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);

// FUNCTION DECLARATIONS VS EXPRESSIONS

// function declaration

// const age1 = calcAge1(1991);
// console.log(age1)

// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }; 

// // function expression

// const calcAge2 = function(birthYear) {
// 	return 2037 - birthYear;
// }; 

// const age2 = calcAge2(1991);
// console.log(age2)

// ARROW FUNCTIONS

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const retirement = 65 - age;
// 	// return retirement;
// 	return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1980, `Bob`));

// FUNCTIONS CALLING OTHER FUNCTIONS

// const cutFruitPieces = function (fruit) {
// 	return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {

// 	const applesPieces = cutFruitPieces(apples);
// 	const orangesPieces = cutFruitPieces(oranges);

// 	const juice = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of orange`;
// 	return juice;
// }

// console.log(fruitProcessor(2, 3));

// REVIEWING FUNCTIONS

// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;

// 	if (retirement > 0) {
// 		console.log(`${firstName} retires in ${retirement}`);
// 		return retirement;
// 	} else {
// 		console.log(`${firstName} has already retired 🎉`);
// 		return -1;
// 	}
// }

// console.log(yearsUntilRetirement(1950, 'Mikes'));
// console.log(yearsUntilRetirement(1991, 'Jonas'));

// ARRAYS

// const friend1 = `Micheal`;
// const firend2 = `Steven`;
// const friend3 = `Peter`;

// const friends = [`Micheal`, `Steven`, `Peter`];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`;
// console.log(friends);
// // friends = [`Bob`, `Alice`]  // cannot do it
// const firstName = 'Jonas';
// const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
// console.log(jonas);


// const calcAge = function(birthYear) {
// 		return 2037 - birthYear;
// }; 

// const years2 = [1990, 1967, 2002, 2010, 2018];

// // calcAge(years) // doesn't work so

// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years2.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
// console.log(ages);

// BASIC ARRAY METHODS

//add elements
// const friends = [`Micheal`, `Steven`, `Peter`];
// const newLength = friends.push(`Jay`); // add element to the end
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // add element to the start
// console.log(friends);

// //remove elements

// friends.pop(); // remove last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // remove first element
// console.log(friends);

// // find position of element

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // if doesn't exist

// friends.push(23);
// console.log(friends.includes('Steven')); // return true or false
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23')); // strick equality

// if (friends.includes('Steven')) {
// 	console.log(`You have a friend called Peter`);
// }

// INTRODUCTION TO OBJECTS

// const jonasArray = [
// 	`Jonas`,
// 	`Schmedtmann`,
// 	2037-1991,
// 	`teacher`,
// 	[`Micheal`, `Peter`, `Steven`]
// ];

// const jonas = {
// 	firstName: `Jonas`,
// 	lastName: `Schmedtmann`,
// 	age: 2037-1991,
// 	job: `teacher`,
// 	friends: [`Micheal`, `Peter`, `Steven`]
// };

// DOT VS. BRACKET NOTATION

// const jonas = {
// 	firstName: `Jonas`,
// 	lastName: `Schmedtmann`,
// 	age: 2037-1991,
// 	job: `teacher`,
// 	friends: [`Micheal`, `Peter`, `Steven`]
// };

// // console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

// const nameKey = `Name`;
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);
// // console.log(jonas.`last` + nameKey); //Error

// const interestedIn = (`What do you want to know about Jonas? Chose between firstName, lastName, age, job, friends`);
// // console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
// 	console.log(jonas[interestedIn]);
// };

// if (jonas[interestedIn] === undefined) {
// 	console.log(`Wrong request!`);
// };

// jonas.location = `Portugal`;
// jonas[`twitter`] = `@jonasschmedtman`;
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// OBJECT METHODS

// const jonas = {
// 	firstName: `Jonas`,
// 	lastName: `Schmedtmann`,
// 	birthYear: 1991,
// 	job: `teacher`,
// 	friends: [`Micheal`, `Peter`, `Steven`],
// 	hasDriversLicense: true,

// 	// calcAge: function(birthYear) {
// 	// 	return 2037 - birthYear;
// 	// }

// 	calcAge: function() {
// 		// console.log(this);
// 		this.age = 2037 - this.birthYear;
// 		return this.age;
// 	},

// 	getSummary: function() {
// 		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
// 	}
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.getSummary());
// // console.log(jonas[`calcAge`](1991));

// THE FOR LOOP

// console.log(`Lifting weights repetition 1 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 2 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 3 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 4 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 5 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 6 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 7 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 8 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 9 ⛹️‍♀️`);
// console.log(`Lifting weights repetition 10 ⛹️‍♀️`);

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
// 	console.log(`Lifting weights repetition ${rep} ⛹️‍♀️`);
// }

// LOOPING ARRAYS AND CONTINUING

// const jonasArray = [
// 	`Jonas`,
// 	`Schmedtmann`,
// 	2037-1991,
// 	`teacher`,
// 	[`Micheal`, `Peter`, `Steven`],
// 	true
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
// 	// reading jonas array
// 	console.log(jonasArray[i], typeof jonasArray[[i]]);

// 	// filling types array
// 	// types[i] = typeof jonasArray[i];
// 	types.push(typeof jonasArray[i])
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break statements
// console.log(`---ONLY STRINGS---`);
// for (let i = 0; i < jonasArray.length; i++) {
// 	if (typeof jonasArray[i] !== 'string') {
// 		continue;
// 	}

// 	console.log(jonasArray[i], typeof jonasArray[i]);
// };

// console.log(`---BREAK WITH NUMBER---`);

// for (let i = 0; i < jonasArray.length; i++) {
// 	if (typeof jonasArray[i] === 'number') {
// 		break;
// 	}

// 	console.log(jonasArray[i], typeof jonasArray[i]);
// };

// LOOPING BACKWARDS AND LOOP IN LOOPS

// const jonasArray = [
// 	`Jonas`,
// 	`Schmedtmann`,
// 	2037-1991,
// 	`teacher`,
// 	[`Micheal`, `Peter`, `Steven`],
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
// 	console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
// 	console.log(`--- Starting exercise ${exercise} ---`);

// 	for (let rep = 1; rep <= 5; rep++) {
// 		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
// 	}
// }

// WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep} ⛹️‍♀️`);
// };

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`WHILE: Lifting weights repetition ${rep} ⛹️‍♀️`);
// 	rep++;
// };

// let dice = Math.floor(Math.random() * 7);

// while (dice !== 6) {
// 	console.log(`You rolled a ${dice}`);
// 	dice = Math.floor(Math.random() * 7);

// 	if (dice === 6) {
// 		console.log(`Loop is about to end`);
// 	}
// }
