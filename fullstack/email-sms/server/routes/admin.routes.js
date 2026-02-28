const { getSettings, updateSettings } = require("../controllers/admin.controller.js")
const { register, login, logout, sendOTP, verifyOTP, forgetPassword, resetPassword } = require("../controllers/auth.controllers.js")
const { createRateLimiter } = require("../middleware/limiter.js")

const router = require("express").Router()

router
    .get("/setting", getSettings)
    .put("/setting/:sid", createRateLimiter({ max: 5 }), updateSettings)


module.exports = router