require("dotenv").config({ path: "./../.env" })
const mongoose = require("mongoose")
const Setting = require("../models/Setting")

const seedSetting = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected")
        const result = await Setting.findOne()
        if (result) {
            console.log("setting  already present")
            process.exit()
        }
        await Setting.create({
            email: true,
            sms: false,
            whatsapp: false
        })
        console.log("setting seed success")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit()

    }
}

seedSetting()