'use strict';
// HIGH LEVEL OVERVIEW

// JS ENGINE AND RUNTIME

// EXECUTION CONTEXTS AND THE CALL STACK

// SCOPE AND THE SCOPE CHAIN

// - scping asks the question 'Where do vairables live?'

// - There are 3 types of scope:
// global, functions, blocks scopes

// We have lexical scoping
// We have variable lookup
// Scope chain only in a certain scope, only parents scopes
// Scope chain has nothing to do with the orded with functions are called

// SCOPING IN PRACTICE

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

// 	function pringAge() {
// 		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millenial = true;
// 			// Creating new varibale with same name as outer scope's vairable
// 			const firstName = `Steven`;

// 			// Reassigning outer scope's varibalbe
// 			output = `NEW OUTPUT`

// 			const str = `Oh, and you're a millenial, ${firstName}`;
// 			console.log(str);

// 			function add (a, b) {
// 				return a + b;
// 			}
// 		}

// 		// console.log(str); // str in an inner block scope
// 		console.log(millenial); // used var, it doesn't have block scope, only function
// 		// add(2, 3); // functions also have a block scope only in strict mode
// 		console.log(output);
// 	}
// 	pringAge();

//   return age;
// }

// const firstName = `Jonas`;
// calcAge(1991);
// // console.log(age); // can't be access to an inner scope
// // printAge(); // can't be access to an inner scope

// // VARIABLE ENVIRONMET HOSTING

// // variables
// // TDZ starts
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = `Jonas`;
// // TDZ ends
// let job = `teacher`;
// const year = 1991;

// // functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(numProducs);
// if (!numProducs) {
// 	deleteShopingCart();
// }

// var numProducs = 10;

// function deleteShopingCart() {
//   console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // console.log(window);
// // console.log(x === window.x); true
// // console.log(y === window.y); false
// // console.log(z === window.z); false

// THIS KEYWORD

// METHOD: this = Object that is calling the method
// SIMPLE FUNCTION CALL: this = undefined (in strict mode), or window object (in non strict mode)
// ARROW FUNCTIONS: this = this of surrounding function(parent), don't get its own this
// EVENT LISTENER: this = DOM elements that the handler is attached t
// new, call, apply, bind => later in the course

// THIS KEYWORD PRACTICE

// console.log(this); //this = window object

// const calcAge = function (birthYear) {
// 	console.log(2037 - birthYear);
// 	console.log(this);
// };

// calcAge(1991); // this = undefined (in strict mode)

// const calcAgeArrow = (birthYear) => {
// 	console.log(2037 - birthYear);
// 	console.log(this);
// };

// calcAgeArrow(1980); // this = windows object, because it's the closest parent

// const jonas = {
// 	year: 1991,
// 	calcAge: function() {
// 		console.log(this);
// 		console.log(2037 - this.year);
// 	}
// }

// jonas.calcAge(); // this = Object that is calling the method

// const matilda = {
// 	year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // functions just are values, and we can copy them in this way
// matilda.calcAge(); // this = Object that is calling the method in this case it's matilda object
// // this keyword is realy dynamic

// const f = jonas.calcAge;
// console.log(f);
// // f();

// const john = {
// 	year: 2000,
// }

// john.age = f;
// john.age();

// REGULAR FUNCTIONS VS ARROW FUNCTIONS

// var firstName = `Matilda`;

// const jonas = {
//   firstName: `Jonas`,
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     //solution 1

//     // const self = this; // self or that, prevet this error, ES5 method
//     // const isMillential = function() {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // }

//     // solution 2

//     // arrow functions uses parent this, and in this case calcAge has this is jonas
//     const isMillential = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillential();
//   },

//   // greet: () => console.log(`Hey ${this.firstName}`), // don't use arrow functions as a method

//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// console.log(this.firstName);
// jonas.calcAge();

// // arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// // arrow functions don't have arguments keyword
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b
// };

// addArrow(2, 5, 8);

// PRIVITIVES VS OBJECTS

// //primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30

// //objects
// const me = {
//   name: `Jonas`,
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log(`Me `, me); // age 27
// console.log(`Friends`, friend); // age 27

// PRIVITIVES VS OBJECTS IN PRACTICE

// // primitive types
// let lastName = `Williams`;
// let oldLastName = lastName;
// lastName = `Davis`;
// console.log(lastName, oldLastName); // `Davis`, `Williams`

// // reference types
// const jessica = {
//   firstName: `Jessica`,
//   lastName: `Williams`,
//   age: 27,
// };

// const marriedJessuca = jessica; // just copy the reffernce which point to this object
// marriedJessuca.lastName = `Davis`;
// console.log(`Before marriage:`, jessica);
// console.log(`After marriage:`, marriedJessuca);
// // it didn't create a new object in the heap, only new varriable which point to the object address in the heap

// // marriedJessuca = {}; // we can't do it because of const

// // really copying object (Object.assign)

// const jessica2 = {
//   firstName: `Jessica`,
//   lastName: `Williams`,
//   age: 27,
//   family: [`Alice`, `Bob`],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = `Davis`;
// jessicaCopy.family.push(`Mary`);
// jessicaCopy.family.push(`John`);
// console.log(`Before marriage:`, jessica2); // `Williams`;
// // array changed
// console.log(`After marriage:`, jessicaCopy); // `Davis`;
// // array changed

// // new object was created in the heap, but if we have object in object, it works only with high-level object, not deep copy
