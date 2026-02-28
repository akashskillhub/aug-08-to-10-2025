const Blog = require("../models/Blog.js")
const upload = require("../utils/upload.js")
const path = require("path")
const cloud = require("./../utils/cloud.js")

exports.createBlog = async (req, res) => {
    try {
        // await Blog.create(req.body)
        upload(req, res, async (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ message: err.message })
            }

            const { secure_url } = await cloud.uploader.upload(req.file.path)
            //          👆 image url

            await Blog.create({ ...req.body, hero: secure_url })
            //                          👆title and desc

            res.status(201).json({ message: "blog create success" })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
exports.readBlog = async (req, res) => {
    try {
        const result = await Blog.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
exports.updateBlog = async (req, res) => {
    try {
        const { bid } = req.params
        await Blog.findByIdAndUpdate(bid, req.body)
        res.status(200).json({ message: "blog update success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        const { bid } = req.params
        const x = await Blog.findById(bid)
        await cloud.uploader.destroy(path.basename(x.hero).split(".")[0])
        await Blog.findByIdAndDelete(bid)
        res.status(200).json({ message: "blog delete success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}