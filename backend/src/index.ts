// src/index.ts
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import db from "./db/database";
import { getAllTodo } from "./queries/queries";
import router from "./routes/toDoRoutes";
import cors from "cors";

dotenv.config();

const app = express();
const port = 8080;
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/api", router);

app.get("/", async (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
