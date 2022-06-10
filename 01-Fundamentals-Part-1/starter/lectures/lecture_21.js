//////////////////////////////////////////////////
// Lecture 21: Truthy and Falsy Values
//////////////////////////////////////////////////

// 5 falsy values: 0, "", undefined, null, NaN
// We don't include "false" to the falsy values because false is false.
// The falsy values is converted to false when we attemp to convert them into a boolean.
// They aren't false but they will become when they are converted to a boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 123;
if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is UNDEFINED");
}
