import express from "express";
import * as TodoController from "../controllers/toDoController";

const router = express.Router();

router.get("/todos", TodoController.getAllTodos);
router.post("/add-todo", TodoController.addTodo);
// router.post("/todos", TodoController.createTodo);
// router.put("/todos/:id", TodoController.updateTodo);
// router.delete("/todos/:id", TodoController.deleteTodo);

export default router;
