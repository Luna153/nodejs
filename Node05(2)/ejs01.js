const ejs = require("ejs");
// 安裝 ejs
// npm i ejs
// 引用 ejs 模組
const fs = require("fs")
const path = require("path")

let name = "Leia"
let str = "Hello, EJS!"

// 存成 js 檔案, 使用 ejs.render 可以將 js 檔案渲染成 ejs檔
// (渲染玩可使用"<%變數名稱%>")與 php 邏輯類似
// let result = ejs.render("<%=str%>, <%=name%>",{name: name, str: str})

// 參數名稱跟值相同時可以省略，也可以把參數拿出來設變數使用
// let file = __dirname+ "/template01.html"
let file = path.resolve(__dirname, "./template01.html")
let template = fs.readFileSync(file).toString()
let result = ejs.render(template, {name, str})


console.log(result);