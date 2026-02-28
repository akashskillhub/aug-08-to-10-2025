const multer = require("multer")
// const path = require("path")

// const fileStorage = multer.diskStorage({
//     destination: (req, file, next) => {
//         next(null, "public")
//     },
//     filename: (req, file, next) => {
//         next(null, `${Date.now()}${path.extname(file.originalname)}`)
//     },
// })

// module.exports = multer({ storage: fileStorage }).single("test")

module.exports = multer({ storage: multer.diskStorage({}) }).single("test")
