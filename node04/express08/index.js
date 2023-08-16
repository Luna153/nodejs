const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("首頁")
})

app.get("/home", (req,res)=>{
    res.send("前台首頁")
})

// 路由 middleware 可以放很多組，按照順序放入 function 名稱，記得 function 中要加入 next() 才會繼續往下跑
app.get("/admin", checkCodeMiddleware, (req,res)=>{
    res.send("後台首頁")
})

app.get("/setting", checkCodeMiddleware, (req,res)=>{
    res.send("後臺設定首頁")
})

app.get("*", (req,res)=>{
    res.send("<h1>404，找不到頁面</h1>")
})


app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})

function checkCodeMiddleware(req, res, next){
    let code = req.query.code
    // console.log(code);
    if(req.query.code === "464"){
        next()
    }else{
        res.send("沒有權限")
    }
}