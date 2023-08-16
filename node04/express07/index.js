const express = require("express")
const app = express()
const moment = require("moment")
const fs = require("fs")
const path = require("path")
const logFile = path.resolve(__dirname + "/access.log")

// middleware
let recordLogMiddleware = (req, res, next)=>{
    let {url, ip} = req;
    // console.log(url, ip);
    let datetime = moment().format("YYYY-MM-DDTHH:mm:ss")
    // console.log(datetime);
    fs.appendFile(logFile, `${datetime} ${url} ${ip}\r\n`, error=>{
        if(error){
            console.log("寫入失敗");
            return false 
        }
        console.log("寫入成功");
    })
        next();
} 

app.use(recordLogMiddleware);

app.get("/", (req,res)=>{
    res.send("首頁")
})

app.get("/home", (req,res)=>{

    res.send("主頁")
})

app.get("/login", (req,res)=>{
    res.send("登入頁")
})

app.all("*", (req,res)=>{
    res.status(404).send("<h1>404 Not Found.</h1>")
})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})


// 不同函式的使用差別：
/*如果是 function abc =  會有變數提升的規則*/