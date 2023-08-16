const express = require("express")
const app = express()
const path = require("path")
// node 或 react 中靜態資源通常都是放在 public資料夾中，所以這一句路徑指定一定要有
const publicName = path.resolve(__dirname + "/public")
app.use(express.static(publicName))

app.get("/", (req,res)=>{
    res.send("首頁")
})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})