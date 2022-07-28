'use strict';

////////////////////////////////////////////////////////////
// 208. Constructor Functions and the new Operator
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
console.log(matilda);

const jack = new Person('Jack', 1975);
console.log(jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);
*/

////////////////////////////////////////////////////////////
// 209. Prototypes
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jonas, matilda, jack);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log('');

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log('');

console.log(jonas.__proto__);
console.log(matilda.__proto__);
console.log(jack.__proto__);

console.log('');

console.log(jonas.__proto__ === Person.prototype);
console.log(matilda.__proto__ === Person.prototype);
console.log(jack.__proto__ === Person.prototype);

console.log('');

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species, jack.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
*/

////////////////////////////////////////////////////////////
// 211. Prototypal Inheritance on Built-In Objects
