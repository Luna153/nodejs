const http = require("http");;
const fs = require("fs");
const path=require("path");



const server = http.createServer((req, res) => {
    // console.log("要求方法是: " + req.method);
    // console.log("要求路徑是: " + req.url)
    res.setHeader("content-type", "text/html;charset=utf-8")
    let file = path.resolve(__dirname + "/template01.html");
    let data = fs.readFileSync(file);
    res.end(data);
})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})