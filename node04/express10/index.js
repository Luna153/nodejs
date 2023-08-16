const express = require("express")
const app = express()
const path = require("path")
// const bodyParser = require("body-parser")

const publicName = path.resolve(__dirname, "/public")
app.use(express.static(publicName))

// 全域的使用方式
// app.use(bodyParser.urlencoded({ extended: false }))

// 路由 middleware 的使用方式
// let urlencodedParser = bodyParser.urlencoded({ extended: false })

// body-parser 被 express 吸收了，所以不用安裝即可使用，將原先的bodyParser.直接替換成express.
let urlencodedParser = express.urlencoded({ extended: false })

app.get("/", (req,res)=>{
    res.send("首頁")
})

app.get("/login", (req,res)=>{
    // res.send("顯示表單")
    // let file = path.resolve(__dirname + "/public/form.html")
    // res.sendFile(file)
    res.redirect("/form.html")
})

app.post("/login", urlencodedParser, (req,res)=>{
    // 上面的 parse 路由函式會自動把表單的內容整理近req.body中
    console.log(req.body);
    res.send("取得表單資訊")
})


app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})