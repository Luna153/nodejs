const fs = require("fs");

// 刪除
// fs.unlink("./測試寫入.txt", error=>{
//     if(error){
//         console.log("失敗");
//         return false;
//     }
//     console.log("刪除成功")
// })


// fs.rm("./測試寫入2.txt", error=>{
//     if(error){
//         console.log("失敗");
//         return false;
//     }
//     console.log("刪除成功")
// })

//不會有成功失敗回傳
fs.rmSync("./測試寫入3.txt");