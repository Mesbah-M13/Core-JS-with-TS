// ✅ create new file first

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

// ✅ now rename the new_file
/*
const fs = require("fs");
const path = require("path");

const oldPath = path.join(
  __dirname,
  "../../src/12-rename-move-remove/new_file.txt"
);

const newPath = path.join(
  __dirname,
  "../../src/12-rename-move-remove/new_file_rename.txt"
);

try {
  fs.renameSync(oldPath, newPath);
  console.log("File renamed successfully!", newPath);
} catch (err) {
  console.error("Error renaming file:", err);
}
*/

// move file

const fs = require("fs");
const path = require("path");

// old file path
const oldPath = path.join(
  __dirname,
  "../../src/12-rename-move-remove/new_file_rename.txt"
);

// new folder path
const newDir = path.join(__dirname, "../../src/12-rename-move-remove/new_dir");

// create folder if not exists
if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir);
}

// new file path inside new_dir
const newPath = path.join(newDir, "new_file_rename.txt");

try {
  fs.renameSync(oldPath, newPath); // move file
  console.log("File moved successfully!", newPath);
} catch (err) {
  console.error("Error moving file:", err);
}
