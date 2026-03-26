import "dotenv/config"
import express from "express"
import todoRoutes from "./routes/todo.routes.js"
import mongoose from "mongoose"
import { MONGO_URL, NODE_ENV, PORT } from "./config/index.js"

mongoose.connect(MONGO_URL as string)
const app = express()

app.use(express.json())

app.use("/api/todo", todoRoutes)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
        console.log(`mode ${NODE_ENV}`)
    })

})