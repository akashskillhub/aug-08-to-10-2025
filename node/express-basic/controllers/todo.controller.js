
// export const getTodos = () =>{}

exports.getTodos = (req, res) => {
    res.json({ message: "get success", success: true })
}

exports.createTodo = (req, res) => {
    res.json({ message: "create success", success: true })
}

exports.updateTodo = (req, res) => {
    res.json({ message: "update success", success: true })
}

exports.deleteTodo = (req, res) => {
    res.json({ message: "delete success", success: true })
}