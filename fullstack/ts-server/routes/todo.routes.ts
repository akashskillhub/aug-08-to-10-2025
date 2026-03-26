import express from "express"
import { createTodo, deleteTodo, readTodo, updateTodo } from "../controllers/todo.controllers.js"
const router = express.Router()

router
    .get("/", readTodo)
    .post("/create", createTodo)
    .put("/update/:tid", updateTodo)
    .delete("/delete/:tid", deleteTodo)

export default router