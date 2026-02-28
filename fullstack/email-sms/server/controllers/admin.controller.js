const Setting = require("../models/Setting")

exports.getSettings = async (req, res) => {
    try {
        const result = await Setting.findOne()
        res.status(200).json({
            message: "setting fetch success",
            result
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to fetch settings" })
    }
}

exports.updateSettings = async (req, res) => {
    try {
        const { sid } = req.params
        await Setting.findByIdAndUpdate(sid, req.body)
        res.status(200).json({ message: "setting update success", })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to update settings" })
    }
}