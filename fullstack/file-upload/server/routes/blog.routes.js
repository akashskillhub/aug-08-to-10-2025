const { readBlog, createBlog, updateBlog, deleteBlog } = require("../controllers/blog.controller.js")

const router = require("express").Router()

router
    .post("/create", createBlog)
    .get("/", readBlog)
    .put("/modify/:bid", updateBlog)
    .delete("/remove/:bid", deleteBlog)

module.exports = router