const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller.js")

const router = require("express").Router()

router
    .get("/", getTodo)
    .post("/create", addTodo)
    .patch("/modify/:noteId", updateTodo)
    .delete("/remove/:kahipn", deleteTodo)

module.exports = router