'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // Before ES6 object literals

  /*
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  */

  // After ES6 enhanced object literals
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    open: 0,
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Before ES6 object literals
  /*
  openingHours: openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  */

  // After ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////////////////////////
// Lecture 103: Destructuring Arrays

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second); // 'Italian', 'Pizzeria'

// const [first, , second] = restaurant.categories;
// console.log(first, second); // 'Italian', 'Vegetarian'

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Nested destructiring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // 8 1 1
*/

////////////////////////////////////////////////////////////
// Lecture 104: Destructuring Objects

/*
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
})

const {
  name,
  openingHours,
  categories
} = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {
  menu = [], starterMenu: starters = []
} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({
  a,
  b
} = obj);
console.log(a, b);

// Nested objects
// const { fri } = restaurant.openingHours;
// console.log(fri);

// const { fri: { open, close } } = openingHours;
// console.log(open, close);

const {
  fri: {
    open: o,
    close: c
  }
} = openingHours;
console.log(o, c);
*/

////////////////////////////////////////////////////////////
// Lecture 105: The Spread Operator (...)

/*
const arr = [7, 8, 9];
console.log(arr);

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example!
// const ingredients = [prompt("Let's make pasta! Ingredient 1: "), prompt("Ingredient 2: "), prompt("Ingredient 3: ")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Guiseppe"
}
console.log(newRestaurant);

const restaurantCopy = {
  ...restaurant
};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

////////////////////////////////////////////////////////////
// Lecture 106: Rest Pattern and Parameters

/*
// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Rest collects all the array elements after the last variable
// Rest is must be used at the end of the destruction
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const {
  sat,
  ...weekdays
} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  console.log(numbers);

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
*/

////////////////////////////////////////////////////////////
// Lecture 107: Short Circuiting (&& and ||)

/*
// Use ANY data type, return ANY data type, short-circuiting
console.log("---- OR ----");
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 0;
// Sıfır (0) bir falsy değer olduğu için program istenilen sonucu vermez.
const guests1 = restaurant.numGuests?restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Jonas");

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach")
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

////////////////////////////////////////////////////////////
// Lecture 108: The Nullish Coalescing Operator (??)

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or "")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

////////////////////////////////////////////////////////////
// Lecture 109: Logical Assignment Operators

/*
// OR assignment operator

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
*/

////////////////////////////////////////////////////////////
// Lecture 111: Looping Arrays: The for-of Loop

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/

////////////////////////////////////////////////////////////
// Lecture 112: Enhanced Object Literals

/*
  This lecture was studied in "openingHours" and "restaurant" objects above.
*/

////////////////////////////////////////////////////////////
// Lecture 113: Optional Chaining (?.)

/*
// WITHOUT optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Real-world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist!');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array is empty.');
*/

////////////////////////////////////////////////////////////
// Lecture 114: Looping Objects: Object Keys, Values and Entries

/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days.`);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

for (const day of properties) {
  console.log(day);
}

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/
