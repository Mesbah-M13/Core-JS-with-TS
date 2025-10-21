// 1️⃣ Example 1 :  Shopping Total
var pricesInNum = [5, 3, 4, 2, 6];
var lastTotal = pricesInNum.reduce(function (sum, price) {
    // console.log(`Current Total: ${sum} ; Adding: ${price}`);
    return sum + price;
}, 0);
// console.log(`Final result is : ${lastTotal}`);
// 2️⃣ Example 2 : Counting Items in Shopping Cart
var cart = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
];
var itemCount = cart.reduce(function (count, item) {
    count[item] = (count[item] || 0) + 1;
    return count;
}, {});
// console.log(`Final result is :`, itemCount);
// 3️⃣ Example 3:  Finding Most Expensive Item
var products = [
    { name: "iPhone", price: 999 },
    { name: "Samsung", price: 800 },
    { name: "Google", price: 7100 },
];
var mostExpensive = products.reduce(function (expensive, current) {
    return current.price > expensive.price ? current : expensive;
});
console.log("Final result is :", mostExpensive);
