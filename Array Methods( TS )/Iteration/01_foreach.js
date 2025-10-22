/*
forEach() executes a function for each array element. It doesn't return anything (returns undefined).

Syntax:

array.forEach((element, index, array) => {
  // code to execute
});

*/
var users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
];
users.forEach(function (user) {
    console.log("".concat(user.name, " is ").concat(user.age, " years old"));
});
