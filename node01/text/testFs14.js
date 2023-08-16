const fs=require("fs");

console.log(__dirname);
//直接執行會找不到檔案(路徑問題)
fs.writeFileSync(__dirname + "/text.html","test");
