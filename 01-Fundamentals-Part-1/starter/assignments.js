// LECTURE: Values and Variables

const country = "Turkey";
const continent = "Europe";
let population = 84340000;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types

const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// LECTURE: let, const and var

language = "Turkish";
population = 90000000;

// LECTURE: Basic Operators

/*
let half = population / 2;
console.log(half);

population++;
console.log(population);

population--;
console.log(population);

let populationFinland = 6000000;
let whichIsBigger = population > populationFinland;
console.log(whichIsBigger);

let average = 33000000;
let isAverageBigger = population < average;
console.log(isAverageBigger);

let description =
  country +
  " " +
  "is in" +
  " " +
  continent +
  "," +
  " " +
  "and its" +
  " " +
  population +
  " " +
  "million people speak" +
  " " +
  language +
  ".";
console.log(description);
*/

// LECTURE: Strings and Template Literals

/*
description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
*/

// LECTURE: Taking Decisions: if / else Statements

/*
population = 33000000;

if (population > average) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      (average - population) / 1000000
    } million below average.`
  );
}
*/

// LECTURE: Type Conversion and Coercion

/*
let n;

n = "9" - "5"; // 4
console.log(n);

n = "19" - "13" - "17"; // -11
console.log(n);

n = "19" - "13" + 17; // 23
console.log(n);

n = "123" < 57; // false
console.log(n);

n = 5 + 6 + "4" + 9 - 4 - 2; // 1143
console.log(n);

// LECTURE: Equality Operators: == vs. ===
let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border.");
} else {
  console.log("No borders.");
}
*/

// LECTURE: Logical Operators

const isEnglish = Boolean(language == "English");
const lessThan = Boolean(population < 50000000);

console.log(`A country that speaks English: ${isEnglish}`);
console.log(`A country that has less than 50 million people: ${lessThan}`);
console.log(`A country that is not an island: ${isIsland}`);

if (isEnglish && lessThan && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}