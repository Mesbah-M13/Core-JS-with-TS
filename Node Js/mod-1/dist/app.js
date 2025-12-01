"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.writeFile("example.txt", "some text", (err) => {
    if (err) {
        console.log("Something went wrong : ", err);
    }
    else
        console.log("Successfull");
});
//# sourceMappingURL=app.js.map