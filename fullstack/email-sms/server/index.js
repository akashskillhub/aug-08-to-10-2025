require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const { FRONTEND_URL } = require("./utils/config.js")
const cors = require("cors")
const app = express()
mongoose.connect(process.env.MONGO_URL)
app.use(express.json())
app.use(cors({ origin: FRONTEND_URL, credentials: true }))

app.use("/api/auth", require("./routes/auth.routes.js"))
app.use("/api/admin", require("./routes/admin.routes.js"))

mongoose.connection.once("open", () => {
    console.log("mongo connect")
    app.listen(process.env.PORT, () => {
        console.log(`server running on port ${process.env.PORT}`)
        console.log(`cors allowed ${FRONTEND_URL}`)
        console.log(`node env ${process.env.NODE_ENV}`)
    })
})