const http = require("http");;
const fs = require("fs");
const path = require("path");



const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, "http://localhost");
    if (pathname === "/") {
        res.setHeader("content-type", "text/html;charset=utf-8");
        let file = path.resolve(__dirname + "/page1.html");
        let data = fs.readFileSync(file);
        res.end(data);
    }else if(pathname==="/page1.css"){
        // 不用放 setHeader : css 檔本身就有 charset
        //如果有放 setHeader 會全部變文字檔
        let file = path.resolve(__dirname + "/page1.css");
        let data = fs.readFileSync(file);
        res.end(data);
    }else if(pathname==="/page1.js"){
        let file = path.resolve(__dirname + "/page1.js");
        let data = fs.readFileSync(file);
        res.end(data);
    }else{
        res.statusCode=404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("<h1>找不到此頁!!!</h1>")
    }


})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})