const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller.js")

const router = require("express").Router()

router.get("/", getTodos)
router.post("/", createTodo)
router.patch("/1", updateTodo)
router.delete("/1", deleteTodo)

// export default  router
module.exports = router