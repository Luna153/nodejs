const express = require("express");
const path = require("path");
const fs = require("fs");

const multer = require("multer");
const storage = multer.diskStorage({
    // 使用diskStorage方法
    //搬移檔案位置:
    destination: function (req, file, cb) {
        //cb=call back function
        //注意參數
        cb(null, __dirname + "/public/uploads/");
    },
    //重新命名:
    filename: function (req, file, cb) {
        //避免檔名被覆蓋:
        //npm uuid
        //npm nanoid
        if (!req.timestamp) {
            req.timestamp = Date.now();
            req.fileIndex = 0;
        } else {
            req.fileIndex++;
        }
        // let timestamp = Date.now();
        let newName = (req.timestamp + req.fileIndex) + path.extname(file.originalname);
        cb(null, newName);
    }
});
const upload = multer({ dest: path.resolve(__dirname, "./public") });
// 指定dest預設上傳路徑參數 指向__dirname, "./public"
// upload是一個function
const upload2 = multer({ storage });


const app = express();

//使用技術ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"))
app.use(express.static(path.resolve(__dirname, "./public")));
//路徑 靜態

app.get("/", (req, res) => {
    //根目錄路由路徑
    console.log(req.get("ip"));
    res.send("首頁")
})

app.get("/form1", (req, res) => {
    //用send回傳
    // res.send("表單1");
    res.render("form1")
})

app.get("/form2", (req, res) => {
    res.render("form2")
})

app.get("/form3", (req, res) => {
    res.render("form3")
})

app.post("/upload1", upload.single("myFile"), (req, res) => {
    // upload方法.single("myFile表單的name") 
    // res.send("收到表單")

    // 用form表單上傳檔案 用時間戳記命名 並儲存在upload資料夾 myFile儲存檔名不存路徑
    let timestamp = Date.now();
    let newName = timestamp + path.extname(req.file.originalname);
    fs.renameSync(req.file.path, "./public/upload/" + newName);
    req.body.myFile = newName;
    // console.log(newName);
    // 時間戳記(拿來當檔名)
    res.json({ body: req.body, file: req.file });
    // 回傳 json 格式的 body 和 file
})


//upload.none();
app.post("/upload2", upload.array("myFile", 3), (req, res) => {
    // 3:限制數量 req.files複數多s
    let myFiles = [];
    let timestamp = Date.now();
    req.files.forEach((file, index) => {
        let num = timestamp + index;
        let newName = num + path.extname(file.originalname);
        // file.originalname拿掉req. 
        fs.renameSync(file.path, "./public/upload/" + newName);
        myFiles.push(newName);
    });
    req.body.myFiles = myFiles;

    res.json({ body: req.body, file: req.files });
})

app.post("/upload3", upload2.array("myFile"), (req, res) => {

    res.json({ body: req.body, file: req.files });
})

app.listen(3000, () => {
    console.log("server is running");
})