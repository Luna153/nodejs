//使用 url 模組 取用 pathname 和 query
const http = require("http");;
const url = require("url");

const server = http.createServer((req, res) => {
    // console.log("要求方法是: " + req.method);
    console.log("要求路徑是: " + req.url)
    // let data=url.parse(req.url);
    // console.log(data);

    //解構賦值 取值
    //query name和pwd
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname);
    console.log(query.name);
    console.log(query.pwd);


    res.end("hello server!");
    //queryString可以查詢內容
    //path路徑
    //query查詢
})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})