import express from "express";
import todoController from "../controllers/todoControllers.js";
const router = express.Router();

// API routes

router.get("/todos", todoController.getAllTodos);
router.post("/todos", todoController.addNewTodos);
router.get("/todos/:id", todoController.getSingleData);
router.put("/todos/:id", todoController.updateTodo);
router.delete("/todos/:id", todoController.deleteTodo);


export default router;