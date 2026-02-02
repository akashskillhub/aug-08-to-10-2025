const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/node-todo")

const app = express()
app.use(express.json()) // body parser middleware
app.use("/notes", require("./routes/todo.route.js"))


mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running"))
})