const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("首頁");
});

app.get("/request", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("要求訊息內容取得");
    //傳統的 http 模組方法
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);
    //使用 express 之後可以直接取用的
    console.log(req.path);
    ///request
    console.log(req.query);
    // { Id: 'ben', pwd: 'a12345' }
    console.log(req.ip);
    //::1
    console.log(req.get("host"));
    //localhost:3000
});

app.listen(3000, () => {
    console.log("server is running")
})