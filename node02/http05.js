//使用 js URL 物件 取用 pathname 和 query
//大寫 URL 是 js 內建模組
const http = require("http");;

const server = http.createServer((req, res) => {
    // console.log("要求方法是: " + req.method);
    // console.log("要求路徑是: " + req.url)

    //第二個參數補login前面網址
    // let data=new URL("/login?name=ben&pwd=a123456", "http://localhost");

    //req.url替換
    // let data=new URL(req.url, "http://localhost");
    // console.log(data);

    //使用要求網址變數取值
    let { pathname, searchParams: query } = new URL(req.url, "http://localhost");
    console.log(pathname);
    console.log(query.get("name"));
    console.log(query.get("pwd"));



    res.end("hello server!");

})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})