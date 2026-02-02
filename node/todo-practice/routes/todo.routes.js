const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller.js")

const router = require("express").Router()

router
    .get("/", getAllTodos)
    .post("/create", createTodo)
    .patch("/modify/:tid", updateTodo)
    .delete("/remove/:tid", deleteTodo)

module.exports = router