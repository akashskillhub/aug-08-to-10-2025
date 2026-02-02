const User = require("../model/User.js")

exports.register = async (req, res) => {
    try {
        await User.create(req.body)
        res.status(201).json({ message: "user register success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}
// middleware
// file upload -> multer