const ejs = require("ejs");
const fs = require("fs")
const path = require("path")

let name = "Leia"
let str = "Hello, EJS!"

// let result = ejs.render("<%=str%>, <%=name%>",{name: name, str: str})

// 參數名稱跟值相同時可以省略，也可以把參數拿出來設變數使用
// let file = __dirname+ "/template01.html"
let file = path.resolve(__dirname, "./template01.html")
let template = fs.readFileSync(file).toString()
let result = ejs.render(template, {name, str})


console.log(result);