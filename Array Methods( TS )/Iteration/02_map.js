/*

vmap() in TypeScript

map() transforms each element in an array and returns a new array with the transformed values.


// Syntax :

const newArray = array.map((element, index, array) => {
  return transformedValue;
});
*/
var users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
];
// Extract just names
var names = users.map(function (user) { return user.name; });
console.log(names); // ['Alice', 'Bob', 'Charlie']
var userCards = users.map(function (user) { return ({
    displayName: user.name.toUpperCase(),
    isAdult: user.age >= 18,
}); });
console.log(userCards);
