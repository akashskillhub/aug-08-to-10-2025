const http = require("http")

const app = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.write("GET SUCCESS")
        res.end()
    } else if (req.method === "POST" && req.url === "/") {
        res.write("POST SUCCESS")
        res.end()
    } else {
        res.write("Resource Not Found")
        res.end()
    }
})

app.listen(5000, console.log("server running..."))