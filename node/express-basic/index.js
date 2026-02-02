const express = require("express")

const app = express()

app.use(express.json()) // 👈 middleware

app.use("/todo", require("./routes/todo.routes.js"))
app.use("/auth", require("./routes/auth.routes.js"))

app.listen(5000, console.log("SERVER RUNNING ON : http://localhost:5000"))