const mongoose = require("mongoose")

module.exports = mongoose.model("setting", new mongoose.Schema({
    email: { type: Boolean, default: true },
    sms: { type: Boolean, default: false },
    whatsapp: { type: Boolean, default: false },
}, { timestamps: true }))