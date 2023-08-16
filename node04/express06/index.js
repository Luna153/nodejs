const express = require("express")
const app = express()
const path = require("path")
const {singers} = require("./singers")

app.get("/", (req,res)=>{

// http 模組的回應方式
    // res.setHeader("content-type", "text/html;charset=utf-8")
    // res.statusCode = 404;
    // res.statusMessage = "Page Not Found";
    // res.write("回應內容可以很多個")
    // res.write("回應內容可以很多個")
    // res.write("回應內容可以很多個")
    // res.end("首頁")

// express 模組的回應方式
    // res.status(404);
    // res.set("aaa" , "hello") /*express 設定回應標頭的方法 */
    // res.send("首頁")

// express 中連續接著寫的寫法
    // res.status(404).set("qqq", "hi").send("這裡是首頁")

// express 將頁面導向其他網址
    // res.redirect("https://www.netflix.com/tw/")

// download
    // let url = path.resolve(__dirname+ "/singers.json");
    // res.download(url)

// 回傳json，這就是API的基礎
    // res.json(singers)

// 回傳靜態資源
    let file = path.resolve(__dirname , "./abc.html")
    res.sendFile(file)

})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})