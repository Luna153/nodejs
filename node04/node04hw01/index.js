const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("首頁");
})


app.get("/p/:id/",(req,res)=>{
    let id = req.params.id;
    res.setHeader("content-type", "text/html;charset=utf-8");
    let pageName = "";
    
    if (id === "CAT01") {
        pageName = "cat01";
    } else if (id === "CAT02") {
        pageName = "cat02";
    } else if (id === "CAT03") {
        pageName = "cat03";
    }  else if (id === "CAT04") {
        pageName = "cat04";
    }  else if (id === "CAT05") {
        pageName = "cat05";
    }
    res.end(pageName);
})
app.listen(3000,()=>{
    console.log("server is running")
})