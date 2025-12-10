"use strict";
// ✅ create new file first
Object.defineProperty(exports, "__esModule", { value: true });
// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(
//   __dirname,
//   "../../src/12-rename-move-remove/new_file.txt"
// );
// fs.writeFile(filePath, "Good Morning...", (err: NodeJS.ErrnoException) => {
//   if (err) throw err;
//   console.log("New file created at: ", filePath);
// });
// now rename the new_file
const fs = require("fs");
const path = require("path");
const oldPath = path.join(__dirname, "../../src/12-rename-move-remove/new_file.txt");
const newPath = path.join(__dirname, "../../src/12-rename-move-remove/new_file_rename.txt");
try {
    fs.renameSync(oldPath, newPath);
    console.log("File renamed successfully!", newPath);
}
catch (err) {
    console.error("Error renaming file:", err);
}
//# sourceMappingURL=main.js.map