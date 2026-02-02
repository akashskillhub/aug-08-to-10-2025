const Todo = require("../model/Todo.js")


exports.getAllTodos = async (req, res) => {
    try {
        const result = await Todo.find()
        res.json({ message: "todo fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}
exports.createTodo = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.status(201).json({ message: "todo create success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        const { tid } = req.params
        await Todo.findByIdAndUpdate(tid, req.body)
        res.json({ message: "todo update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        const { tid } = req.params
        await Todo.findByIdAndDelete(tid)
        res.json({ message: "todo delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}