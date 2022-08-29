// 272. Exporting and Importing in ES6 Modules

// Importing module

/*
import './shoppingCart.js';
console.log('Importing module');
console.log(shippingCost);
*/

/*
import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, quantity);
*/

/*
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
*/

/*
// import add, { addToCart, totalPrice as price, quantity } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);
*/

////////////////////////////////////////////////////////////
// 273. Top-Level await (ES2022)

/*
console.log('Start fetching...');
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
console.log(res);
const data = await res.json();
console.log(data);
console.log('Something else.');
*/

/*
import './shoppingCart.js';

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { type: data.at(-1).title, body: data.at(-1).body };
};
*/

// Not very clean
/*
const lastPost = getLastPost();
console.log(lastPost);
lastPost.then(last => console.log(last));
*/

/*
const lastPost = await getLastPost();
console.log(lastPost);
*/

////////////////////////////////////////////////////////////
// 274. The Module Pattern

/*
const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost}).`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart.addToCart('apples', 4);
ShoppingCart.addToCart('pizza', 2);
console.log(ShoppingCart);
console.log(ShoppingCart.shippingCost);
*/

////////////////////////////////////////////////////////////
// 275. CommonJS Modules

// Export
/*
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost}).`
  );
};
*/

// Import
/*
const {addToCart} = require("./shoppingCart.js")
*/

////////////////////////////////////////////////////////////
// 277. Introduction to NPM

/*
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],

  user: {
    loggedIn: true,
  },
};
console.log(state);

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIn = 'false';
console.log(state, stateClone, stateDeepClone);
*/

////////////////////////////////////////////////////////////
// 278. Bundling With Parcel and NPM Scripts

/*
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],

  user: {
    loggedIn: true,
  },
};
console.log(state);

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIn = 'false';
console.log(state, stateClone, stateDeepClone);

if (module.hot) module.hot.accept();
*/

////////////////////////////////////////////////////////////
// 279. Configuring Babel and Polyfilling

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],

  user: {
    loggedIn: true,
  },
};
console.log(state);

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIn = 'false';
console.log(state, stateClone, stateDeepClone);

if (module.hot) module.hot.accept();
