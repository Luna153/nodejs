const http = require("http");

const server = http.createServer( (req, res)=> {
    // form表單method 取得資料方式
    console.log(req.method);
    //取用路經
    console.log(req.url);
    //通訊協定版本
    console.log(req.httpVersion);
    // 取得要求標頭
    console.log(req.headers);
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("Hello Server!!你好, 主機。")
});

server.listen(9000,()=>{
    console.log("伺服器已啟動 http://localhost:9000/");
});

// 記得ctrl+c