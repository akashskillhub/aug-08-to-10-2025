const Note = require("../model/Note.js")

exports.addTodo = async (req, res) => {
    //                  👇 very dangerous 
    await Note.create(req.body)
    res.json({ message: "todo create success", success: true })
}

exports.getTodo = async (req, res) => {
    const result = await Note.find() //👈 get all data from Note
    res.json({ message: "todo fetch success", success: true, result })
}

exports.updateTodo = async (req, res) => {
    const { noteId } = req.params
    await Note.findByIdAndUpdate(noteId, req.body)
    res.json({ message: "todo update success", success: true })
}

exports.deleteTodo = async (req, res) => {
    const { kahipn } = req.params
    await Note.findByIdAndDelete(kahipn)
    res.json({ message: "todo delete success", success: true })
}