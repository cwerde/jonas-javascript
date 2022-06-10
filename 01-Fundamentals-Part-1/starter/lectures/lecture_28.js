//////////////////////////////////////////////////
// Lecture 28: The Conditional (Ternary) Operator
//////////////////////////////////////////////////

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink1 = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink1);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
