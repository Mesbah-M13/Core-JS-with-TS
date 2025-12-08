"use strict";
// read file ( async )
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../../src/fs-module/msg.txt");
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err)
        throw err;
    console.log(data);
});
//# sourceMappingURL=new.js.map