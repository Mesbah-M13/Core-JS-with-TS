import express from "express";
import chalk from "chalk";
import cors from "cors"; // ⬅ important

const app = express();

app.use(cors()); // ⬅ allow requests from frontend
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend API...!" });
});

const PORT = 4600;
app.listen(PORT, () => {
  console.log(chalk.greenBright(`Server running at http://localhost:${PORT}`));
});
