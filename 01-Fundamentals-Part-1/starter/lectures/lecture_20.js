//////////////////////////////////////////////////
// Lecture 20: Type Conversion and Coercion
//////////////////////////////////////////////////

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String("23"), 23);

// Type Coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

n = 2 + 3 + 4 + "5";
console.log(n);

n = "10" - "4" - "3" - 2 + "5";
console.log(n);
