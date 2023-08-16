const http = require("http");

const server = http.createServer( (req, res)=> {
    //request & response
    //中文要設定content-type
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("Hello Server!!你好, 主機。")
    // 沒有content-type 中文亂碼
});

server.listen(9000,()=>{
    // 用node.js寫入阿帕契
    console.log("伺服器已啟動 http://localhost:9000/");
});

// ctrl+c 終端機重新啟動