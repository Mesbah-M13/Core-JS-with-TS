"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What's your name?", (answer) => {
    console.log(answer);
    rl.question("How old are you?", (age) => {
        console.log(`I am ${age} years old`);
        process.exit();
    });
});
//# sourceMappingURL=readline.js.map