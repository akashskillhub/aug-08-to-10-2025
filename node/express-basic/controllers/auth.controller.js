exports.signin = (req, res) => {

    console.log(req.body)
    res.json({ message: "signin success", success: true })
}
exports.signup = (req, res) => {
    res.json({ message: "signup success", success: true })
}
exports.signout = (req, res) => {
    res.json({ message: "signout success", success: true })
}