// LECTURE

// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // //data types (primitive);

// // // Number: let age = 23;
// // // String: let firstName = 'Jonas';
// // // Boolean: let fullAge = true;
// // // Undefined: let children;
// // // Null: empty value;
// // // Symbol: not useful for now;
// // // BigInt: larger numbers;

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// console.log(typeof false);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// // let const var

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// birthYear = 1990; // error assignment to constant variable
// console.log(birthYear); 

// // const job; error Missing initializzer

// var job = 'programmer';
// job = 'teacher';
// console.log(job);

// Basic operators

// math operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schedtmann';
// console.log(firstName + ' ' + lastName);

// // assigment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

//comperison operators

// console.log(ageJonas > ageSarah); 
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge)

// console.log(now - 1999 > now - 2018);

// Operator precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1999 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Strings and Template Literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiplay \n\
// lines');

// console.log(`String
// multiply
// lines`);

// if, else if statmenets

// const age = 15;

// if (age >= 18) {
// 	console.log(`Sarah can start driving license 🚗`);
// } else {
// 	const yearsLeft = 18 - age;
// 	console.log(`Sarah is too young. Wait another ${yearsLeft} years 😜`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }

// console.log(century);

// Type Conversion and Coercion

// // manually
// const inputYear = '1991';
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));

// //automatically

// console.log(`I am ` + 23 + ` years old`); // =>
// console.log(`I am ` + '23' + ` years old`);

// console.log('23' - '10' - 3); // converted to numbers
// console.log('23' + '10' + 3); // converted to strings
// console.log('23' * 2); // converted to numbers
// console.log('23' / 2); // converted to numbers

// let n = '1' + 1;
// n = n - 1;
// console.log(n);
// let y = 2 + 3 + 4 + '5';
// console.log(y);
// let x = '10' - '4' - '3' - 2 + '5';
// console.log(x);

// Truthy and Falsy values

// 5 falsy value: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
// 	console.log(`Don't spend it all 🙂`);
// } else {
// 	console.log(`You should get a job!`);
// }

// let height = 0;
// if (height) {
// 	console.log(`YEA! Height is defined`);
// } else {
// 	console.log(`Height is UNDEFINED`);
// }

// Equality operators

// const age = '18';
// if (age === 18) {
// 	console.log(`You just became an adult 😅 (strict)`);
// };

// if (age == 18) {
// 	console.log(`You just became an adult 😅 (loose)`);
// };

// console.log(18 === 18);
// console.log(18 === 19);
// console.log(18 === '18');
// console.log(18 == '18');

// const favotite = prompt(`Waht's your favotite number?`);
// console.log(typeof favotite);

// if (favotite == 23) { // '23' == 23
// 	console.log(`Cool! 23 is an amazing number`);
// }

// if (favotite === 23) { // '23' !== 23
// 	console.log(`Cool! 23 is an amazing number`);
// } else if (favotite === 7) {
// 	console.log(`7 is also a cool number`);
// } else if (favotite === 9) {
// 	console.log(`9 is also a cool number`);}
// 	else {
// 	console.log(`Number is not 23 or 7 or 9`);
// }

// if (favotite !== 23) {
// 	console.log(`Why not 23? 😢`);
// }

// Logical operators

// const hasDriversLicence = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const isTired = false; // C

// console.log(hasDriversLicence && hasGoodVision && isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
// 	console.log(`Sarah is able to drive!`)
// } else {
// 	console.log(`Someone else should drive...`)
// }

// switch statement

// const day = 'friday';

// switch(day) {
// 	case 'monday': // day === 'monday'
// 		console.log(`Plan course structure`);
// 		console.log(`Go to coding meetup`);
// 		break;
// 	case 'tuesday':
// 		console.log(`Prepare theory videos`);
// 		break;
// 	case 'wednesday':
// 	case 'thursday':
// 		console.log(`Write code examples`);
// 		break;
// 	case 'friday':
// 		console.log(`Record videos`);
// 		break;
// 	case 'saturday':
//   case 'sunday':		
// 		console.log(`Enjoy the weekend 😁`);
// 		break;
// 	default:
// 		console.log(`Not a valid day!`);		
// }

// if (day === 'monday') {
// 	console.log(`Plan course structure`);
// 	console.log(`Go to coding meetup`);
// } else if (day === 'tuesday') {
// 	console.log(`Prepare theory videos`);
// } else if (day === 'wednesday' || day === 'thursday') {
// 	console.log(`Write code examples`);
// } else if (day === 'friday') {
// 	console.log(`Record videos`);
// } else if (day === 'saturday' || day === 'sunday') {
// 	console.log(`Enjoy the weekend 😁`);
// } else {
// 	console.log(`Not a valid day!`);
// }

//  statements and expressions

// 3 + 4 // expression
// 1991 // expression
// true && false && !false // expression

// if (23 > 10) {
// 	const str = `23 is bigger`;
// } // statement

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`); // has expression

// // console.log(`I'm ${2037 - 1991} years old ${if (23 > 10) {
// // 	const str = `23 is bigger`;
// // }}`); //we can't put statement

// conditional operator

// const age = 23;
// // age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

// const drink = age >= 18 ? `wine 🍷` : `water 💧`;
// console.log(drink);

// let drink2;
// if (age >= 18) {
// 	drink2 = `wine 🍷`;
// } else {
// 	drink2 = `water 💧`;
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);

