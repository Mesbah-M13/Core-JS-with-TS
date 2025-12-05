const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">",
});

rl.question("What's your name?", (answer: any) => {
  console.log(answer);

  rl.question("How old are you?", (age: number) => {
    console.log(`I am ${age} years old`);

    process.exit();
  });
});

// *** Creating a Readline Interface
// The createInterface method is the main way to create a readline interface. It takes an options object with several configuration properties:
