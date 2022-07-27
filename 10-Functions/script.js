'use strict';
// // CLOSURES MORE EXAMPLES

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigining f function
// h();
// f();
// console.dir(f);

// // Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now borrding all ${n} passengers`);
// 		console.log(`There are 3 goups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start bording in ${wait} seconds`);
// };


// const perGroup = 1000;
// boardPassengers(180, 3);

// CLOSURES
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//  const runOnce = function () {
// 	console.log(`This will never run again`);
//  }
// runOnce();

// //IIFE
// (function () {
// 	console.log(`This will never run again`);
// 	const isPrivate = 23;
// })();

// // console.log(isPrivate); // error

// (() => console.log(`This will never run again`))();

// // creating block scope
// {
// 	const isPrivate = 23;
// 	var notPrivate = 46;
// }

// // console.log(isPrivate) // error again
// console.log(notPrivate);

// THE CALL AND APPLY METHODS
// const lufthansa = {
//   airLine: `Lufthansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a set on ${this.airLine} flight ${this.iataCode}${flightNum}`);

// 		this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   }
// };

// lufthansa.book(239, `Jonas Schmedtmann`);
// lufthansa.book(635, `John Smith`);

// const eurowings = {
// 	airLine: `Eurowing`,
// 	iataCode: `EW`,
// 	bookings: [],
// }

// const book = lufthansa.book;
// // Does NOT work
// // book(23, `Sarah Williams`);

// // Call method
// book.call(eurowings, 23, `Sarah Williams`);
// console.log(eurowings);

// book.call(lufthansa, 239, `Mary Cooper`);
// console.log(lufthansa);

// const swiss = {
// 	airLine: `Swiss Air Lines`,
// 	iataCode: `LX`,
// 	bookings: [],
// }

// book.call(swiss, 583, `Alex Makon`);

// //  Apply method
// const flightData = [583, `George Coooper`];
// book.apply(swiss, flightData);
// book.call(swiss, ...flightData);

// console.log(swiss);

// // THE BIND METHOD
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23,`Steveen Williams`);
// console.log(eurowings);

// // partial application
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`Jonas Schw`);
// bookEW23(`Martha Joes`);

// // with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
// 	console.log(this);
// 	this.planes++;
// 	console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector(`.buy`).addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
// 	return function (value) {
// 		return value + value * rate;
// 	}
// }

// const addVATRate = addTaxRate(0.23);
// console.log(addVATRate(100));

// FUNCTION RETURNING FUNCTIONS
// const greet = function (greeting) {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	}
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`Jonas`);
// greeterHey(`Steeven`);
// greet(`Hello`)(`Jonas`);

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow(`Hi`)(`Alex`);
// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
// 	const [first, ...others] = str.split(' ');
// 	return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function (str, fn) {
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);
// 	console.log(`Transformed by: ${fn.name}`)
// }

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
// 	console.log(`🤡`);;
// }

// document.body.addEventListener(`click`, high5);
// [`Jonas`, `Martha`, `Adam`].forEach(high5);

// FIRST CLASS AND HIGHER ORDER FUNCTIONS
/* 
* first-class functions
- functuins are simpli values
- const add = (a, b) => a + b;

* higher-order functions
- receives another function as an argument or returns a new funtion, or both
- this is only possible because of first-class functions
- const greet = () => console.log(`Hey Jonas`);
	bthClose.addEventListener(`click`, greet);
*/

// DEFAULT PARAMETRES
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengeres = 1,
//   price = 199 * numPassengeres
// ) {
//   // ES5 way
//   // numPassengeres = numPassengeres || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengeres,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`, 2, 800);
// createBooking(`LH123`, 2);
// createBooking(`LH123`, 5);
// createBooking(`LH123`, undefined, 1000);

// HOW PASSING ARGUMENTS WORKS
// const flight = `LH234`;
// const jonas = {
//   name: `Jonas Schmedtmann`,
//   passport: 23426156187,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = `LH999`;
//   passenger.name = `Mr. ` + passenger.name;

//   if (passenger.passport === 23426156187) {
//     console.log(`Check in`);
//   } else {
//     console.log(`Wrong passport!`);
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // // Is the same as doing...
// // const flightNum  = flight;
// // const passenger = jonas;

// const newPasport = function (person) {
// 	person.passport = Math.floor(Math.random() * 100000000);
// }

// newPasport(jonas);
// checkIn(flight, jonas);
