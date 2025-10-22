/*
forEach() executes a function for each array element. It doesn't return anything (returns undefined).

Syntax:

array.forEach((element, index, array) => {
  // code to execute
});

*/

// Basic Example

const numbers: number[] = [1, 2, 3, 4, 5];

const resultOne = numbers.forEach((num) => {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10

console.log(resultOne);
