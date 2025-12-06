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
//# sourceMappingURL=logger.js.map