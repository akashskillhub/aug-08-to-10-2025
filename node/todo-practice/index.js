const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json()) // body parser
app.use("/api/todo", require("./routes/todo.routes.js"))
app.use("/api/auth", require("./routes/auth.routes.js"))

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED")
    app.listen(process.env.PORT, console.log("app running..."))
})
