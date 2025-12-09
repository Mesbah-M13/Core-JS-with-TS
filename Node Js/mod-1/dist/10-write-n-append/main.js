"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.writeFile("exam.txt", "Hello World...", { flag: "a+" }, (err) => {
    if (err)
        throw err;
});
//# sourceMappingURL=main.js.map