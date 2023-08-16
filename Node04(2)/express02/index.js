const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.end("Hello")
})
app.get("/home",(req,res)=>{
    res.end("This is Home.")
})
app.post("/login",(req,res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("進入登入流程")
})
app.get("/login",(req,res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end(`<h1>表單頁面</h1>
    <form action="/login" method="post">
        <input type="text" name="id">
        <button>send</button>
    </form>`)
})

app.all("*", (req,res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("<h1>404 - 找不到頁面</h1>")
});

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})