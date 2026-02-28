
const FRONTEND_URL = process.env.NODE_ENV === "production"
    ? process.env.LIVE_URL
    : process.env.LOCAL_URL

module.exports = FRONTEND_URL