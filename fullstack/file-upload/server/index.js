require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const FRONTEND_URL = require("./utils/config.js")

mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json()) //👈 body parser middleware
app.use(cors({ origin: FRONTEND_URL, credentials: true }))

app.use("/api/blog", require("./routes/blog.routes.js"))

mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
        console.log(`ENVIRMENT ${process.env.NODE_ENV}`);
        console.log(`CORS ALLOWED ${FRONTEND_URL}`);
    })
})