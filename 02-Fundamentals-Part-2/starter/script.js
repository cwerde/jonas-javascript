// Lecture 32: Activating Strict Mode
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Lecture 33: Functions

/*
function logger() {
  console.log("My name is Jonas.");
}

// Calling / Running / Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} and ${oranges} oranges.`;
  return juice;
}

// fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 0));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Lecture 34: Functions Declarations vs. Expressions

/*
// Function Declarations
function calcAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

const age1 = calcAge1(1998);
console.log(`You are ${age1} years old.`);

// Function Expressions
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
}

const age2 = calcAge2(1998);
console.log(`You are ${age2} years old.`);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Lecture 35: Arrow Functions

/*
// Function Expressions
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// }

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = birthYear => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// }

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Lecture 36: Functions Calling Other Functions

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// Lecture 37: Reviewing Functions

/*
const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////