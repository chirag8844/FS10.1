const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST new todo
router.post("/", async (req, res) => {
  const todo = new Todo({ title: req.body.title });
  await todo.save();
  res.json(todo);
});

// PUT update todo
router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(updated);
});

// DELETE todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
