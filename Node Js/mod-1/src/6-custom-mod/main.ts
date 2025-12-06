const logger = require("./logger");

// logger("This is a log msg from main.js file");

// console.log("Log file name", logger.config.logFileName);

// named exports

const { config } = require("./logger");

logger("This is a named exports from main.ts");

console.log("Named exports dir name:", config.logDirectory);
