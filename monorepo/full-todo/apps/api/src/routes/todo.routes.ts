import { Router } from "express"
import { createTodo, deleteTodo, readTodo, updateTodo } from "../controllers/todo.controller"
const router = Router()

router
    .post("/create", createTodo)
    .get("/read", readTodo)
    .put("/update/:tid", updateTodo)
    .delete("/remove/:tid", deleteTodo)

export default router