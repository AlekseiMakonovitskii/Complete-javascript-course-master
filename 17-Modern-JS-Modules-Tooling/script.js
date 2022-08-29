// 270 An Overview of Modern JavaScript Development
// 271 An Overview of Modules in JavaScript
// 272 Exporting and Importing in ES6 Modules

//Importing module
// import './shoppingCart.js';
// import { addToCart, totalprice as price, tq } from './shoppingCart.js';

// console.log(`Importing module`);
// addToCart(`bread`, 10);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// console.log(`Importing module`);
// ShoppingCart.addToCart(`bread`, 5)
// console.log(ShoppingCart.totalprice);

// import add,  { addToCart, totalprice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add from './shoppingCart.js';
// import {cart} from './shoppingCart.js';
// add(`pizza`, 2)
// add(`bread`, 5)
// add(`milk`, 3)
// add(`apples`, 7)

// console.log(cart);

// 273 Top-Level await (ES2022)

// only with modules (blocks modules execution)
// console.log(`Start fetching`);
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log(`Something`);

// real world exampel
// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
// 	console.log(data);

// 	return {title: data.at(-1).title, text: data.at(-1).body};
// };

// const lastPost = getLastPost();

// // Not very clean
// // lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// 274 The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuanity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//   };

// 	const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

// 	return {
// 		addToCart,
// 		cart,
// 		totalPrice,
// 		totalQuanity,
// 	}
// })();

// ShoppingCart2.addToCart(`apple`, 4);
// ShoppingCart2.addToCart(`pizza`, 2);
// console.log(ShoppingCart2.cart);
// console.log(ShoppingCart2.shippingCost);

// 275 CommonJS Modules

// Export node
// export.addToCart = function (product, quantity) {
// 	cart.push({ product, quantity });
// 	console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
// };

// // Import
// const {addToCart} = require(`./shoppingCart.js`)

// 276 A Brief Introduction to the Command Line
import cloneDepp from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: `bread`, quantity: 5 },
    { product: `pizza`, quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

const stateDeppClone = cloneDepp(state);
state.user.loggedIn = true;
console.log(stateDeppClone);

// 279 Configuring Babel and Polyfilling
// 280 Review_ Writing Clean and Modern JavaScript
// 281 Let's Fix Some Bad Code_ Part 1
// 282 Declarative and Functional JavaScript Principles
// 283 Let's Fix Some Bad Code_ Part 2
