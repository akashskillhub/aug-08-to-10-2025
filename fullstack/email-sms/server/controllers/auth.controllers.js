const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const { sendEmail } = require("../utils/email.js")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")
const { differenceInSeconds } = require("date-fns/differenceInSeconds")
const { FRONTEND_URL } = require("../utils/config.js")
const { registerTemplate } = require("../email-templates/registerTemplate.js")
const { forgetPasswordTemplate } = require("../email-templates/forgetPasswordTemplate.js")
const { otpTemplate } = require("../email-templates/otpTemplate.js")
const { sendSMS } = require("../utils/sms.js")
const Setting = require("../models/Setting.js")
exports.register = async (req, res) => {
    try {
        const { email, mobile, password, name } = req.body
        const isFound = await User.findOne({ $or: [{ email }, { mobile }] })
        if (isFound) {
            return res.status(409).json({ message: "email or mobile already exist" })
        }
        const hash = await bcrypt.hash(password, 10)
        await User.create({ ...req.body, password: hash })
        // email
        await sendEmail({
            message: registerTemplate({ name }),
            email,
            subject: "Registration success to skillhub"
        })
        // sms
        res.status(201).json({ message: "register success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to register" })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        // check if email exist
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(401).json({ message: "email not found" })
        }
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({ message: "invalid password" })
        }
        if (!result.isActive) {
            return res.status(401).json({ message: "account blocked by admin" })
        }

        // NOTE: we will change this logic to access and refresh token
        const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("USER", token, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        })
        res.status(200).json({
            message: "login success", result: {
                name: result.name,
                email: result.email,
                mobile: result.mobile
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to login" })
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("USER")
        res.status(200).json({ message: "logout success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to logout" })
    }
}

exports.sendOTP = async (req, res) => {
    try {
        const { username } = req.body
        const result = await User.findOne({ $or: [{ email: username }, { mobile: username }] })
        if (!result) {
            return res.status(401).json({ message: "invalid email or mobile" })
        }
        const OTP = crypto.randomInt(100000, 1000000)
        const hashOTP = await bcrypt.hash(OTP.toString(), 10)
        await User.findByIdAndUpdate(result._id, { otp: hashOTP, otpSendOn: new Date() })
        const allSetting = await Setting.findOne()

        if (allSetting && allSetting.email) {
            await sendEmail({
                email: result.email,
                subject: "login otp",
                message: otpTemplate({
                    name: result.name,
                    otp: OTP,
                    min: process.env.OTP_EXPIRY / 60,
                    sec: process.env.OTP_EXPIRY,
                })
            })
        }
        if (allSetting && allSetting.sms) {
            await sendSMS({ numbers: result.mobile, message: `your otp is ${OTP}` })
        }
        if (allSetting && allSetting.whatsapp) {
            console.log("send whatsapp message")
        }


        res.status(200).json({ message: "otp send success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to send otp" })
    }
}

exports.verifyOTP = async (req, res) => {
    try {
        const { username, otp } = req.body
        const result = await User.findOne({ $or: [{ email: username }, { mobile: username }] })
        if (!result) {
            return res.status(401).json({ message: "invalid email or mobile" })
        }
        if (!result.otp) {
            return res.status(401).json({ message: "can not login without otp" })
        }
        const isVerify = await bcrypt.compare(otp, result.otp)

        if (!isVerify) {
            return res.status(401).json({ message: "invalid otp" })
        }
        if (differenceInSeconds(new Date(), new Date(result.otpSendOn)) > process.env.OTP_EXPIRY) {
            return res.status(401).json({ message: "otp exipred" })
        }
        const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("USER", token, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        })
        await User.findByIdAndUpdate(result._id, { otp: null })
        res.status(200).json({ message: "verify and login success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to verify otp" })
    }
}


exports.forgetPassword = async (req, res) => {
    try {
        const { username } = req.body
        const result = await User.findOne({ $or: [{ email: username }, { mobile: username }] })
        if (!result) {
            return res.status(401).json({ message: "invalid email / mobile" })
        }
        // create token
        const resetToken = crypto.randomBytes(32).toString("hex")
        const resetLink = `${FRONTEND_URL}/reset-password?token=${resetToken}`
        await User.findByIdAndUpdate(result._id, { resetToken })
        await sendEmail({
            email: result.email,
            subject: `Password Reset Link`,
            message: forgetPasswordTemplate({ name: result.name, resetLink })
        })

        res.status(200).json({ message: "reset link send success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable send reset link" })
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.query // from frontend params
        const { password } = req.body

        if (!token) {
            return res.status(401).json({ message: "token required" })
        }
        const result = await User.findOne({ resetToken: token })

        if (!result) {
            return res.status(401).json({ message: "invalid token" })
        }

        const hash = await bcrypt.hash(password, 10)
        await User.findByIdAndUpdate(result._id, { password: hash, resetToken: null })

        res.status(200).json({ message: "reset password success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable reset password" })
    }
}