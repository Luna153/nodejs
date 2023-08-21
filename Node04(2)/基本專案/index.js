const express = require("express")
//引入express模組 npm i express
const app = express()
//用app接

app.get("/", (req,res)=>{
    // 用網址get值("網址後面路徑", (req請求, res回覆)=>{call back funciton})
    res.send("首頁")
    // localhost:3000/導到此處
})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})