const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name?", (answer: any) => {
  console.log(answer);

  rl.question("How old are you?", (age: number) => {
    console.log(`I am ${age} years old`);
    process.exit();
  });
});
