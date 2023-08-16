const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
const ejs = require("ejs")
const fs = require("fs")
const path = require("path")

// let str = "<ol>\n\r"

// blackpink.forEach(name=>{
//     str += `<li>${name}</li>\r\n`
// })
// str += "</ol>"
// console.log(str);

// fs.readFile 讀出來是 buffer ，必須用toString()轉換
let template = fs.readFileSync(path.resolve(__dirname, "./template02.html")).toString()


// 因為想換行&保持格式所以用重音符號
let result = ejs.render(template, {blackpink})

console.log(result);