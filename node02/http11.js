const http = require("http");;
const fs = require("fs");
const path = require("path");



const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, "http://localhost");

    let filePath = path.resolve(__dirname + pathname);
    fs.readFile(filePath, (error, data) => {
        if(error){
            // 500 失敗
            res.statusCode=500;
            res.setHeader("content-type","text/html;charset=utf-8")
            res.end("<h1>文件讀取失敗</h1>")
            return false;
        }
        res.end(data);
    })


})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})