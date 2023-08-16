//可省略.js
//系統化模組可省略./
// const boy = require("./aa/boy");
const boy = require("./aa/");
// const boy2 = require("./boy2");

let { sayName: aa, sayCountry: bb } = boy
// aa()
// bb()
// console.log(boy2)

console.log(boy)
//require省略附檔名
//使用順序:.js>.json