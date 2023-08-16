const express = require("express");
const path = require("path");
const fs = require("fs");
const formidable = require("formidable");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"))
app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
    res.send("首頁");
})

app.get("/form4", (req, res) => {

    res.render("form4");
})

app.post("/upload4", (req, res) => {
    // res.send("upload4")

    // const form = formidable();
    //只能上傳檔案 只抓到一個:在 formidable 設定取用多個
    const form = formidable({
        uploadDir:__dirname+"/public/uploads2/",
        keepExtensions:true,
        // 如果想要檔案上傳至uploadDir所指定的目錄，此屬性就要設為true
        multiples:true
        //multiples=>屬性
        // 开启多文件上传，默认只上传一个文件。如果是true 则form.parse第三个参数files是一个数组， 这个功能需要HTML file加属性multiple
    });

    form.parse(req, (error, fields, files)=>{
        //取用res(在全域) 
        if(error){
            nextTick(error);
            return false;
        }
        res.json({fields, files});
    });
})

app.listen(3000, () => {
    console.log("server is running");
})

// npm i formidable@v2-latest
//安裝v2版本最新