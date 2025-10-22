/*

vmap() in TypeScript

map() transforms each element in an array and returns a new array with the transformed values.


// Syntax :

const newArray = array.map((element, index, array) => {
  return transformedValue;
});
*/

// Basic Example
/*
const numbers: number[] = [1, 2, 3, 4, 5];

const doubled: number[] = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - original unchanged

*/

// Transforming Objects

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

// Extract just names
const names: string[] = users.map((user) => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Create new objects with different structure
interface UserCard {
  displayName: string;
  isAdult: boolean;
}

const userCards: UserCard[] = users.map((user) => ({
  displayName: user.name.toUpperCase(),
  isAdult: user.age >= 18,
}));
console.log(userCards);
