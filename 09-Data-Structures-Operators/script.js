'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(strterIndex, mainIndex) {
    return [this.starterMenu[strterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// STRING METHODS PRACTICE
// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split(`+`)) {
//   const [type, from, to, time] = flight.split(`;`);
//   const output = `${type.startsWith(`_Delayed`) ? `🔴` : ``}${type.replaceAll(`_`, ` `)} from  ${getCode(from)} to ${getCode(to)} (${time.replace(`:`, 'h')})`.padStart(39);
//   console.log(output);
// }

// WORKING WITH STRINGS 3

// //Split and Join
// console.log(`a+very+nice+string`.split(`+`));
// console.log(`Jonas Schmedtmann`.split(` `));
// const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);

// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(` `);
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(` `));
// }

// capitalizeName(`jessica ann smith davis`);
// capitalizeName(`alex makon`);

// // Padding

// const message = `Go to gate 23!`;
// console.log(message.padStart(20, `+`).padEnd(30, '+'));
// console.log(`Jonas`.padStart(20, `+`).padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + ``;
//   const last = str.slice(-4);
//   return last.padStart(str.length, `*`);
// }

// console.log(maskCreditCard(43378764));
// console.log(maskCreditCard(43378421842194218));
// console.log(maskCreditCard(`4337842184219421424242`));

// // Repeat
// const message2 = `Bad weather... All Departues Delayed... `;
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// WORKING WITH STRINGS 2

// const airLine = `Tap Air Portugal`;
// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

// // fix capitalizatopn in name
// const passenger = `jOnas`; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const fixCapitalizatopn = function (str) {
//   const strLower = str.toLowerCase();
//   const strCorrect = strLower[0].toUpperCase() + strLower.slice(1);
//   console.log(strCorrect);
// };

// fixCapitalizatopn('aLex');

// // Comparing emails
// const email = `hello@jonas.io`;
// const loginEmail = `   Hello@Jonas.Io \n`;

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normailizedEmail = loginEmail.toLowerCase().trim();
// console.log(normailizedEmail);
// console.log(email === normailizedEmail);

// // Raplcing
// const priceGB = `288,97£`;
// const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const annuuncement = `All passengers come to barding door 23. Bording door 23!`;

// console.log(annuuncement.replaceAll(`door`, `gate`));
// console.log(annuuncement.replace(/door/g, `gate`));

// // Bolleans
// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`));
// console.log(plane.includes(`Boeing`));
// console.log(plane.startsWith(`Air`));

// if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
//   console.log(`Part of the new Airbus family`);
// }

// // Practice exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You are NOT allowd on board`);
//   } else {
//     console.log(`Welcome aboard!`);
//   }

// }

// checkBaggage(`I have a laptop, some Food and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

// WORKING WITH STRINGS 1
// const airLine = `TAP Air Portugal`;
// const plane = `A320`;

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(`B737`[0]);
// console.log(airLine.length);
// console.log(`B737`.length);

// console.log(airLine.indexOf(`r`));
// console.log(airLine.lastIndexOf(`r`));
// console.log(airLine.indexOf(`Portugal`));

// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) {
//     console.log(`You gor the middle seat 😬`);
//   } else {
//     console.log(`You got lucky 😎`);
//   }
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

// console.log(new String(`jonas`));
// console.log(typeof new String(`jonas`));

// console.log(typeof new String(`jonas`).slice(-1));

// SUMMARY WHICH DATA STRUCTURE TO USE
// MAPS ITERATION
// const question = new Map([
//   [`question`, `What is the best programming langueage in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `Correct 🎉`],
//   [false, `Try again!`],
// ]);

// console.log(question);

// // Conver object to map
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Iteration
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt(`Your answer`));
// // console.log(answer);

// // console.log(question.get(answer === question.get(`correct`)));

// // conver map to array

// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());
// MAPS FUNDAMENTALS
// const rest = new Map();
// rest.set('name', `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// console.log(rest.set(2, `Lisbon, Portugal`));

// rest
//   .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open`)
//   .set(false, `We are closed`)

// console.log(rest.get(`name`));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// console.log(rest.has(`categories`));
// rest.delete(2);
// const arr = [1,2];
// rest.set(arr, `Test`);
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// // console.log(rest);

// console.log(rest.get(arr));

// SETS
// const ordersSet = new Set([`Pasta`, `Pizza`, `Pizza`, `Risotto`, `Pasta`, `Pizza`]);
// console.log(ordersSet);

// console.log(new Set(`Jonas`));
// console.log(ordersSet.size);
// console.log(ordersSet.has(`Pizza`));
// console.log(ordersSet.has(`Bread`));
// ordersSet.add(`Garlic Bread`);
// ordersSet.add(`Garlic Bread`);
// ordersSet.delete(`Risotto`);
// // ordersSet.clear();

// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size);

// console.log(new Set(`jonasschmedtmann`).size);

// // LOOPING OJECTS
// // Property NAMES
// const propetries = Object.keys(openingHours);
// console.log(propetries);
// let openStr = `We are open on ${propetries.length} days: `;

// for (const day of propetries) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, {open , close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // OPTIONAL CHAINING
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // if (restaurant.openingHours.fri) {
// //   console.log(restaurant.openingHours.fri.open);
// // }

// // example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? `Method dose not exist`);
// console.log(restaurant.orderResotto?.(0, 1) ?? `Method dose not exist`);

// // arrays
// const users = [
//   {name: `Jonas`, email: `hello@gmail.com`},
// ]

// console.log(users[0]?.name ?? `User array empty`);

// ENHANCED OBJECT LITERALS

// console.log(restaurant);

// LOOPING ARRAY (FOR OF)

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i+ 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// LOGICAL ASSIGNMEBT OPERATORS
// const rest1 = {
//   name: `Cari`,
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giovanni Rossi`,
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // OR assigmnet operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // NULLISH assigmnet operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// // rest1.owner = rest1.owner && `<ANONYMOUS>`;
// // rest2.owner = rest2.owner && `<ANONYMOUS>`;

// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;
// console.log(rest1);
// console.log(rest2);

// NULLISH COALESCING OPERATOR (??)
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // SHORT CIRCUITING && AND ||
// console.log(`----- OR -----`);
// // Use any data type, return any data type, short-circtuting
// console.log(3 || 'Jonas');
// // || return the first truthy value
// console.log(`` || `Jonas`);
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || `` || `Hello` || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`----- AND -----`);

// console.log(0 && 'Jonas');
// // && find first falsy value or if all ture, last truthy value
// console.log(7 && 'Jonas');
// console.log(`Hello` && 23 && null && `Jonas`);

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// REST PATTERN AND PARAMETERS

// 1) destructring

// // SPREAD because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST oerator on left side if =
// const [a, b, ...others] = [1, 2 , 3, 4, 5];
// console.log(a, b, others);

// const [pizza, ,risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu
// ];
// console.log(pizza, risotto, otherFood);
// // rest element must be the lastes element

// //Objects

// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
// console.log(sat);

// // 2) functions
// const add = function (...numbers) {
//   let sum = 0;

//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   };

//   console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza(`mashrooms`, `onion`, `olivies`, `spinach`);
// restaurant.orderPizza(`mashrooms`);

// SPREAD OPERATOR
// bad way
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // good way
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join to array or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = `Jonas`;
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`); // we can't do this

// //real world example with function
// // const ingredients = [prompt(`Let's make pasta!
// // Ingrediend 1?`), prompt(`Let's make pasta!
// // Ingrediend 2?`), prompt(`Let's make pasta!
// // Ingrediend 3?`)];
// // console.log(ingredients);
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// //Objects
// const newRestuarant = {foundedIn: 1998, ...restaurant, founder: `Guiseppe`};
// console.log(newRestuarant);

// // Shadow copy
// const restuarantCopy = {...restaurant};
// restuarantCopy.name = `Ristoranto Roma`;
// console.log(restuarantCopy.name);
// console.log(restaurant.name);

// DESTRUCTRING OBJECTS

// //destructring in functions
// restaurant.orderDelivery({
//   time: `23:30`,
//   adress: `Via del Sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: `Via del Sole, 21`,
//   starterIndex: 1,
// });

// //destructring
// const {
//   name,
//   categories,
//   openingHours
// } = restaurant;
// console.log(name, categories, openingHours);

// // new variables names
// const {
//   name: restuarantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;

// console.log(restuarantName, hours, tags);

// // default values
// const {
//   menu = [],
//   starterMenu: starters = []
// } = restaurant;

// // Mutating variables
// let a = 111;
// let b = 999;

// const obj = {
//   a: 23,
//   b: 7,
//   c: 14
// };

// ({a, b} = obj);
// console.log(a, b);

// // nasted objects
// const {
//   fri:
//   {open: o, lose: c}
// } = openingHours;

// console.log(open, close);

// // DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // jsut unpacking
// const [x, y, z] = arr;
// console.log(x, y ,z);
// console.log(arr);

// // restuarant
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switch without
// const temp = main;
// main = secondary;
// secondary = temp;

// // switch with
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // return multi values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nasted destructuring
// const nasted = [2, 4, [5, 6]];
// // const [i, ,j] = nasted;
// // console.log(i, j);
// const [i, ,[j, k]] = nasted;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
