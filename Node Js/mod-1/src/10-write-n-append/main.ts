const fs = require("fs");

fs.writeFile(
  "exam.txt",
  "Hello World...",
  { flag: "a+" },
  (err: NodeJS.ErrnoException) => {
    if (err) throw err;
  }
);
