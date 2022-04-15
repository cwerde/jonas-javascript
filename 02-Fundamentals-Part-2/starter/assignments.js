// LECTURE: Functions
/*
  1. Write a function called 'describeCountry' which takes three parameters:
  'country', 'population' and 'capitalCity'. Based on this input, the
  function returns a string with this format: 'Finland has 6 million people and its
  capital city is Helsinki'

  2. Call this function 3 times, with input data for 3 different countries. Store the
  returned values in 3 different variables, and log them to the console
*/

/*
function describeCountry(country, population, capitalCity) {
  const theCountry = `${country} has ${population / 1000000} million people and its capital city is ${capitalCity}.`;
  return theCountry;
}


// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population / 1000000} million people and its capital city is ${capitalCity}.`;
// }

const country1 = describeCountry("Turkey", 84300000, "Ankara");
console.log(country1);

const country2 = describeCountry("England", 56000000, "London");
console.log(country2);

const country3 = describeCountry("Portugal", 10300000, "Lisbon");
console.log(country3);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Function Declarations vs. Expressions

/*
  1. The world population is 7900 million people. Create a function declaration
  called 'percentageOfWorld1' which receives a 'population' value, and
  returns the percentage of the world population that the given population
  represents. For example, China has 1441 million people, so it's about 18.2% of
  the world population

  2. To calculate the percentage, divide the given 'population' value by 7900
  and then multiply by 100

  3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
  store the results into variables, and log them to the console

  4. Create a function expression which does the exact same thing, called
  'percentageOfWorld2', and also call it with 3 country populations (can be
  the same populations)
*/

/*
const worldPopulation = 7900;

function percentageOfWorld1(country, population) {
  const percentage = (population / worldPopulation) * 100
  const countryPercentage = `${country}'s population is ${percentage}% of the world.`;
  return countryPercentage;
}

const percentageDec1 = percentageOfWorld1("Turkey", 84.3);
console.log(percentageDec1);

const percentageDec2 = percentageOfWorld1("England", 56);
console.log(percentageDec2);

const percentageDec3 = percentageOfWorld1("Portugal", 10.3);
console.log(percentageDec3);

const percentageOfWorld2 = function (country, population) {
  const percentage = (population / worldPopulation) * 100;
  const countryPercentage = `${country}'s population is ${percentage}% of the world.`;
  return countryPercentage;
}

const percentageExp1 = percentageOfWorld2("Turkey", 84.3);
console.log(percentageExp1);

const percentageExp2 = percentageOfWorld2("England", 56);
console.log(percentageExp2);

const percentageExp3 = percentageOfWorld2("Portugal", 10.3);
console.log(percentageExp3);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Arrow Functions
/*
  1. Recreate the last assignment, but this time create an arrow function called
  'percentageOfWorld3'
*/

/*
const percentageOfWorld3 = (country, population) => {
  const percentage = (population / worldPopulation) * 100;
  const countryPercentage = `${country}'s population is ${percentage}% of the world.`;
  return countryPercentage;
}

const percentageArr1 = percentageOfWorld3("Turkey", 84.3);
console.log(percentageArr1);

const percentageArr2 = percentageOfWorld3("England", 56);
console.log(percentageArr2);

const percentageArr3 = percentageOfWorld3("Portugal", 10.3);
console.log(percentageArr3);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Functions Calling Other Functions

/*
  1. Create a function called 'describePopulation'. Use the function type you
  like the most. This function takes in two arguments: 'country' and
  'population', and returns a string like this: 'China has 1441 million people,
  which is about 18.2% of the world.'

  2. To calculate the percentage, 'describePopulation' call the
  'percentageOfWorld1' you created earlier

  3. Call 'describePopulation' with data for 3 countries of your choice
*/

/*
const worldPopulation = 7900;

function percentageOfWorld1(population) {
  const percentage = (population / worldPopulation) * 100;
  return percentage;
}

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} people, which is about ${percentage}% of the world.`;
  return description;
}

const country1 = describePopulation("Turkey", 84.3);
console.log(country1);

const country2 = describePopulation("England", 56);
console.log(country2);

const country3 = describePopulation("Portugal", 10.3);
console.log(country3);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Introduction to Arrays

/*
  1. Create an array containing 4 population values of 4 countries of your choice.
  You may use the values you have been using previously. Store this array into a
  variable called 'populations'

  2. Log to the console whether the array has 4 elements or not (true or false)

  3. Create an array called 'percentages' containing the percentages of the
  world population for these 4 population values. Use the function
  'percentageOfWorld1' that you created earlier to compute the 4
  percentage values
*/

/*
const worldPopulation = 1441;
const percentageOfWorld1 = function (population) {
  return (population / worldPopulation) * 100;
}

const populations = [84.34, 55.98, 10.31, 83.24];
console.log(populations)
console.log(Boolean(populations.length >= 4));

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Basic Array Operations (Methods)

/*
  1. Create an array containing all the neighbouring countries of a country of your
  choice. Choose a country which has at least 2 or 3 neighbours. Store the array
  into a variable called 'neighbours'

  2. At some point, a new country called 'Utopia' is created in the neighbourhood of
  your selected country. So add it to the end of the 'neighbours' array

  3. Unfortunately, after some time, the new country is dissolved. So remove it from
  the end of the array

  4. If the 'neighbours' array does not include the country ‘Germany’, log to the
  console: 'Probably not a central European country :D'

  5. Change the name of one of your neighbouring countries. To do that, find the
  index of the country in the 'neighbours' array, and then use that index to
  change the array at that index position. For example, you can search for
  'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

/*
const neighbours = ["Bulgaria", "Greece", "Syria", "Iraq", "Iran", "Azerbaijan", "Armenia", "Georgia"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) console.log("Probably not a central European country :D");

neighbours[neighbours.indexOf("Bulgaria")] = "Republic of Bulgaria";
neighbours[neighbours.indexOf("Greece")] = "Hellenic Republic";
neighbours[neighbours.indexOf("Syria")] = "Syrian Arab Republic";
neighbours[neighbours.indexOf("Iraq")] = "Republic of Iraq";
neighbours[neighbours.indexOf("Iran")] = "Islamic Republic of Iran";
neighbours[neighbours.indexOf("Azerbaijan")] = "Republic of Azerbaijan";
neighbours[neighbours.indexOf("Armenia")] = "Republic of Armenia";
neighbours[neighbours.indexOf("Georgia")] = "Republic of Georgia";
console.log(neighbours);
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Introduction to Objects

/*
  1. Create an object called 'myCountry' for a country of your choice, containing
  properties 'country', 'capital', 'language', 'population' and
  'neighbours' (an array like we used in previous assignments)
*/

/*
const myCountry = {
  country: "Turkey",
  capital: "Ankara",
  language: "Turkish",
  population: 84.34,
  neighbours: [
    "Bulgaria",
    "Greece",
    "Syria",
    "Iraq",
    "Iran",
    "Azerbaijan",
    "Armenia",
    "Georgia"
  ]
}
*/

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Dot vs. Bracket Notation