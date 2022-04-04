// LECTURE: Values and Variables

const country = "Turkey";
const continent = "Europe";
let populationTurkey = 84340000;

console.log(country);
console.log(continent);
console.log(populationTurkey);

// LECTURE: Data Types

const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof populationTurkey);
console.log(typeof isIsland);
console.log(typeof language);


// LECTURE: let, const and var

language = "Turkish";
populationTurkey = 90000000;

// LECTURE: Basic Operators

let halfPopulation = populationTurkey / 2;
console.log(halfPopulation);

populationTurkey++;
console.log(populationTurkey);

let populationFinland = 6000000;
let whichIsTurkeyFinland = populationTurkey > populationFinland;
console.log(whichIsTurkeyFinland);

let populationAverage = 33000000;
let whichIsTurkeyAverage = populationTurkey < populationAverage;
console.log(whichIsTurkeyAverage);

let description = country + " " + "is in" + " " + continent + "," + " " + "and its" + " " + populationTurkey + " " + "million people speak" + " " + language + ".";
console.log(description);

// LECTURE: Strings and Template Literals

description = `${country} is in ${continent}, and its ${populationTurkey} million people speak ${language}.`;
console.log(description);