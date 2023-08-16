const fs = require("fs");

const file1="./測試寫入.txt";
const content="白日依山盡，黃河入海流。";

// 寫入(檔名,內容,執行動作)
//執行完才寫入 順序3->2
fs.writeFile(file1,content,function(error){
    if(error){
        console.log("1 寫入失敗");
        return false;
    }
    console.log("2 寫入成功")
     
});
console.log("3 測試用字串")