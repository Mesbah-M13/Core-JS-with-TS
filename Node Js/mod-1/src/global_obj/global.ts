process.stdout.write("How are you? \n");
process.stdin.on("data", (data) => {
  console.log(data.toString().trim());
  process.exit();
});
