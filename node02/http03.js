const http = require("http");

// 建立 http Server
const server = http.createServer((req, res) => {
    // console.log("要求方法是: "+req.method);
    // console.log("要求路徑是: "+req.url)
    let body="";
    req.on("data", chunk => {
        //建立註冊事件
        body+=chunk;
    });
    req.on("end", chunk => {
        console.log("要求內容是: "+body)
        res.end("hello server!");
        //寫入內容
    })
    
})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})