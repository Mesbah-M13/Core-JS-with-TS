const fs = require("fs");
fs.readFile("./src/msg.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// console.log("filename:", __filename);
