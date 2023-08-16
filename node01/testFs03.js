const fs=require("fs");
const file="./測試寫入3.txt";
const content="\r\n欲窮千里目，更上一層樓。"

// fs.appendFile(file, content,error=>{
//     if(error){
//         console.log("失敗");
//         return false;
//     }
//     console.log("成功")
// })

// fs.appendFileSync(file,content);

//第三個參數使用物件
// flag附加
fs.writeFileSync(file,content,{flag:"a"});