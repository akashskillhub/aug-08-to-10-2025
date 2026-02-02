const http = require("http")

const port = process.argv[2] || 5000

const app = http.createServer((req, res) => {
    const { method, url } = req
    if (method === "GET" && url === "/") {
        res.write("[]")
        res.end()
    } else if (method === "POST" && url === "/todo") {
        res.write("todo create success")
        res.end()
    } else {
        res.write("server running")
        res.end()
    }
})

app.listen(port, console.log("server running on port " + port))