const { register, login, logout, sendOTP, verifyOTP, forgetPassword, resetPassword } = require("../controllers/auth.controllers.js")
const { createRateLimiter } = require("../middleware/limiter.js")

const router = require("express").Router()

router
    .post("/signup", createRateLimiter({ max: 2 }), register)
    .post("/signin", createRateLimiter({ max: 2 }), login)
    .post("/signout", logout)
    .post("/send-otp", createRateLimiter({ max: 3 }), sendOTP)
    .post("/verify-otp", createRateLimiter({ max: 3 }), verifyOTP)

    .post("/forget-password", forgetPassword)
    .post("/reset-password", resetPassword)

module.exports = router