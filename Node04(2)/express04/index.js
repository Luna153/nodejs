const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("首頁")
})
app.get("/p/:id/",(req,res)=>{
    let id = req.params.id;
    res.setHeader("content-type", "text/html;charset=utf-8")
    let pageName = "";
    if(id === "CvZP-PIguWG"){
        pageName = "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》"
    }else if(id === "CvRz0e3Awmi"){
        pageName ="《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》<img src='https://images.pexels.com/photos/7539498/pexels-photo-7539498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>"
    }
   res.end(pageName)
});
app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})