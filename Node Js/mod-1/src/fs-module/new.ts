// read file ( async )

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../src/fs-module/msg.txt");

fs.readFile(
  filePath,
  "utf-8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) throw err;
    console.log(data);
  }
);
