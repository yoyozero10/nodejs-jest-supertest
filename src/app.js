import express from "express";
import { v4 } from "uuid";

const app = express();

const tasks = [];

// Middlewares
app.use(express.json());

// Routes

app.get("/hello", (req, res) => {
  res.send("Hello from 23521432 - Tran Dai Thang");
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.sendStatus(400);

  const newTask = { ...req.body, id: v4() };
  tasks.push(newTask);
  res.status(200).json(newTask);
});

export default app;
