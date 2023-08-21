const express = require("express")
const app = express()

//使用get方式取得
app.get("/", (req, res) => {
    res.end("Hello This is default page ~")
})
app.get("/home", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("This is Home (進入首頁！)")
})
app.get("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
// 用 js 寫一個 form 表單
// 並且用 post 接
    res.end(`<h1>表單頁面</h1>
    <form action="/login" method="post">
        <input type="text" name="id">
        <button>send</button>
    </form>`)
})

// 使用 post 取得
//從 form.html 表單連結
app.post("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("preparing Login (進入登入流程!)")
})


app.all("*", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("<h1>404 - 找不到頁面</h1>")
});

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000/");
})