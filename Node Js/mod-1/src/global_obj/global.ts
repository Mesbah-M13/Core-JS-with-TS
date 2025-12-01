process.stdout.write(" how are you? \n");
process.stdin.on("data", (data) => {
  console.log(data.toString().trim());
  process.exit();
});
