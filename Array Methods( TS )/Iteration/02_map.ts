/*

vmap() in TypeScript

map() transforms each element in an array and returns a new array with the transformed values.


// Syntax :

const newArray = array.map((element, index, array) => {
  return transformedValue;
});
*/

// Basic Example
const numbers: number[] = [1, 2, 3, 4, 5];

const doubled: number[] = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - original unchanged
