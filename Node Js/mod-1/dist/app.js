"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// fs.writeFile("example.txt", "some text", (err: Error) => {
//   if (err) {
//     console.log("Something went wrong : ", err);
//   } else console.log("Successfull");
// });
// fs.readFile("example.txt", "utf-8", (err: Error, data: string) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File data :\n" + data);
// });
fs.unlink("example.txt", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Delete successfully");
});
//# sourceMappingURL=app.js.map