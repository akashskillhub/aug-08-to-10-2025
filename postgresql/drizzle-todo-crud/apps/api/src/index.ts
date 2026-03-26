import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.routes"
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/todo", todoRoutes)

app.get("/", (req, res) => {
    res.json({ message: "API running successfully" })
})
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})