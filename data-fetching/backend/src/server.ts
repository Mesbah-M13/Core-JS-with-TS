import express from "express";
import chalk from "chalk";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from TypeScript Express!");
});

const PORT = 4600;
app.listen(PORT, () => {
  console.log(chalk.greenBright(`Server running at http://localhost:${PORT}`));
});
