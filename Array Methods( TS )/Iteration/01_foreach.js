/*
forEach() executes a function for each array element. It doesn't return anything (returns undefined).

Syntax:

array.forEach((element, index, array) => {
  // code to execute
});

*/
// Basic Example
/*

const numbers: number[] = [1, 2, 3, 4, 5];

const resultOne = numbers.forEach((num) => {
  console.log(num * 2);
});

console.log(resultOne);

*/
// Output: 2, 4, 6, 8, 10
// With Index :
/*
const fruits: string[] = ["apple", "banana", "orange"];

const newRes = fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

console.log(newRes);

*/
// Output:
// 0: apple
// 1: banana
// 2: orange
// With Type Definitions
/*
interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

users.forEach((user: User) => {
  console.log(`${user.name} is ${user.age} years old`);
});
*/
// Modifying External Variables
var prices = [10, 20, 30, 40];
var total = 0;
prices.forEach(function (price) {
    total += price;
});
console.log("Total: $".concat(total)); // Total: $100
