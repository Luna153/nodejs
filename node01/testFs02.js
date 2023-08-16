// require("fs");模組
const fs = require("fs");

const file1 = "./測試寫入2.txt";
const content = "白日依山盡，黃河入海流。";

try {
    fs.writeFileSync(file1, content);
    console.log("2 寫入成功");
} catch (error) {
    console.log("1 寫入失敗")
}
// 參數只有2個
//寫入成功時程式會往下走
//失敗使用try/catch抓
// 順序2->3
console.log("3 測試用字串")