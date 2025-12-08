"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const util = require("util");
// console.log("Absolute Path: ", __filename);
// console.log(path.basename(__filename));
//  creating custom path using path module
console.log(path.join(__dirname, "./path/file/"));
// to get more information about the path use util
// util.log(path.basename(__filename));
console.log(path.parse("/home/project/app.js"));
//# sourceMappingURL=path.js.map