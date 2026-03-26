import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.routes"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO_URL as string)

const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(express.json())

app.use("/api/todo", todoRoutes)

const PORT = process.env.PORT

mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
