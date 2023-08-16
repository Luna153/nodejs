//使用 js URL 物件 取用 pathname 和 query
//大寫 URL 是 js 內建模組
const http = require("http");;

const server = http.createServer((req, res) => {
    // console.log("要求方法是: " + req.method);
    // console.log("要求路徑是: " + req.url)

    //使用要求網址變數取值
    let { pathname } = new URL(req.url, "http://localhost");

    res.setHeader("content-type", "text/html;charset=utf-8")
    res.setHeader("hello!", "this is content-type!!")
    if (pathname === "/") {
        // res.end("首頁");

        // 可以用 write 寫 最後一組一定要 end
        res.write("首頁");
    } else if (pathname === "/login") {
        // res.end("登錄頁");
        res.write("登錄頁");
    } else if (pathname === "/reg") {
        // res.end("註冊頁");
        res.write("註冊頁");
    }else{
        // 更改headers->general->status code
        res.statusCode=404;
        // 不能打中文
        res.statusMessage="Not Found Page!!!!!";
        // res.end("找不到頁面");
        res.write("找不到頁面");
    }
    //使用write最後要end
    //前面使用end 要把下面這句拿掉
    res.end("hello server!使用write最後要end");
// 
})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})