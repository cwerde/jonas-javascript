'use strict';

// Lecture 93: Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Lecture 95: Hoisting and TDZ in Practice

/*
// Variables
// console.log(me); // undefined
// console.log(job); // Uncaught ReferenceError
// console.log(year); // Uncaught ReferenceError

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Uncaught ReferenceError
// console.log(addArrow(2, 3)); // Uncaught ReferenceError

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Lecture 97: The this Keyword in Practice

/*
console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear); // 46
  console.log(this); // undefined
}
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear); // 57
  console.log(this); // window object
}
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year); // 46
  },
}
jonas.calcAge();

const matilda = {
  year: 2017,
}
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Lecture 98: Regular Functions vs. Arrow Functions

/*
var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // THIS IS A PROBLEM
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // }

    // SOLUTION #1: PRE ES6
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }
    // isMillenial();

    // SOLUTION #2: POST ES6
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();

  },

  // greet: () => {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`)
  // },

  // greet: function () {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`)
  // },
}

// jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);
addArrow(2, 5, 8, 12);
*/
