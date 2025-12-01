const fs = require("fs");

fs.writeFile("example.txt", "some text", (err: Error) => {
  if (err) {
    console.log("Something went wrong : ", err);
  } else console.log("Successfull");
});
