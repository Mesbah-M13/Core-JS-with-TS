import express from "express";
import chalk from "chalk";
import cors from "cors"; // ⬅ important
import { config } from "../config/config.js";

const app = express();

app.use(cors()); // ⬅ allow requests from frontend
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend API...!" });
});

app.listen(config.port, () => {
  console.log(
    chalk.greenBright(`Server running at http://localhost:${config.port}`)
  );
});
