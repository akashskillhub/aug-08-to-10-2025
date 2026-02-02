const { signin, signup, signout } = require("../controllers/auth.controller.js")

const router = require("express").Router()

router.post("/login", signin)
router.post("/register", signup)
router.post("/logout", signout)

module.exports = router

// 👆default export