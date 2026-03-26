import express from "express"
import cors from "cors"
import { User } from "@repo/types"
const app = express()
app.use(cors())
app.use(express.json())

const demo: User = { id: "22", email: 'ddd', name: "" }

app.get("/", (req, res) => {
    res.json({ message: "API running successfully" })
})
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
