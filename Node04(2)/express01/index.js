const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    //顯示中文
    res.end("你好 設定setHeader content-tpye 可以顯示中文!")
})
app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})