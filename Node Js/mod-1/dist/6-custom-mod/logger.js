"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const logMessage = (message) => {
    fs.appendFile("./src/6-custom-mod/app.log", message + "\n", (err) => {
        if (err) {
            console.log("Error found while writing log file", err);
        }
        else {
            console.log("Logged msg :", message);
        }
    });
};
module.exports = logMessage;
// add new property to the default exports using .config
module.exports.config = {
    logFileName: "app.log",
    logDirectory: "./src/6-custom-mod/",
};
//# sourceMappingURL=logger.js.map