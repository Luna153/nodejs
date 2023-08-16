const fs = require("fs");
const path = require("path");
// 模組寫法

// 是一個屬性，用來取得當前作業系統中用於分隔檔案路徑部分的特殊符號
// console.log(path.sep);

// 可以把相對路徑轉換成絕對路徑
// console.log(path.resolve("test.txt"));

//當前testPath.js的絕對路徑
// console.log(__filename);
// testPath.js的路徑內容變成物件
// console.log(path.parse(__filename))



// resolve parse應用
let file = "/ppp.txt";
let pathName = path.resolve(__dirname + file);
let pathObj=path.parse(pathName);
const {name:a1, ext:a2}=pathObj;
console.log(a1,a2)
// __dirname前面不加.
// 解決路徑問題 反斜線??
// 完整檔名
//取得同名物件的屬性


