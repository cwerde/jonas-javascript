//////////////////////////////////////////////////
// Lecture 17: Strings and Template Literals
//////////////////////////////////////////////////

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// Before ES6
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// After ES6
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// You can also write strings with backtrick without any variables
console.log(`Just a regular string...`);

// Before ES6
console.log("String with \n\
multiple\n\
lines");

// After ES6
console.log(`String with
multiple
lines`);
