//////////////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
GOOD LUCK 😀
*/

/*
let marksWeight, marksHeight, johnsWeight, johnsHeight, bmiMarks, bmiJohns, markHigherBMI;

marksWeight = 78;
marksHeight = 1.69;
johnsWeight = 92;
johnsHeight = 1.95;

bmiMarks = marksWeight / marksHeight ** 2; // 27.309968138370508
bmiJohns = johnsWeight / johnsHeight ** 2; // 24.194608809993426

markHigherBMI = bmiMarks > bmiJohns;

console.log("TEST DATA #1", "\n", "Mark's BMI:", bmiMarks, "\n", "John's BMI:", bmiJohns);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

bmiMarks = marksWeight / marksHeight ** 2; // 26.87867813490267
bmiJohns = johnsWeight / johnsHeight ** 2; // 27.44059917355372

markHigherBMI = bmiMarks > bmiJohns;

console.log("TEST DATA #2", "\n", "Mark's BMI:", bmiMarks, "\n", "John's BMI:", bmiJohns);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);
*/

//////////////////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

/*
let marksWeight,
  marksHeight,
  johnsWeight,
  johnsHeight,
  bmiMarks,
  bmiJohns,
  markHigherBMI;

marksWeight = 78;
marksHeight = 1.69;
johnsWeight = 92;
johnsHeight = 1.95;

bmiMarks = marksWeight / marksHeight ** 2; // 27.309968138370508
bmiJohns = johnsWeight / johnsHeight ** 2; // 24.194608809993426

if (bmiMarks > bmiJohns) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${bmiMarks}) is higher than John's (${bmiJohns})`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${bmiJohns}) is higher than Mark's (${bmiMarks})`);
}

marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

bmiMarks = marksWeight / marksHeight ** 2; // 26.87867813490267
bmiJohns = johnsWeight / johnsHeight ** 2; // 27.44059917355372

if (bmiJohns > bmiMarks) {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${bmiJohns}) is higher than Mark's (${bmiMarks})`);
} else {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${bmiMarks}) is higher than John's (${bmiJohns})`);
}
*/

//////////////////////////////////////////////////
// Coding Challenge #3