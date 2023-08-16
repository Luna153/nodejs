const http = require("http");;
const fs = require("fs");
const path = require("path");
const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
};


const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, "http://localhost");

    if (pathname === "/") {
        pathname = "/page1.html"
    }
    let root = __dirname + "/htdocs";
    let filePath = path.resolve(root + pathname);
    // slice(1)刪除第一個字
    let ext = path.extname(filePath).slice(1);
    let type = mimes[ext];

    fs.readFile(filePath, (error, data) => {
        if (error) {
            // console.log(error.code);
            res.setHeader("content-type", "text/html;charset=utf-8")

            switch (error.code) {
                case "ENOENT":
                    res.statusCode = 404;
                    res.end("<h1>找不到文件!</h1>")
                    break;
                default:
                    res.statusCode = 500;
                    res.end("<h1>網路錯誤!</h1>")
            }
            return false;
        }
        if (type) {
            if (ext === "html") {
                res.setHeader("content-type", type + ";charset=utf-8")
            } else {
                res.setHeader("content-type", type)
            }
        } else {
            res.setHeader("content-type", "application/octet-stream")
        }
        res.end(data);
    })


})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})