"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
// fs.mkdir("new_dir", (err: NodeJS.ErrnoException) => {
//   if (err) throw err;
// });
const filePath = path.join(__dirname, "new_dir");
fs.mkdir(filePath, { recursive: true }, (err) => {
    if (err)
        throw err;
    console.log("Directory created at:", filePath);
});
//# sourceMappingURL=main.js.map