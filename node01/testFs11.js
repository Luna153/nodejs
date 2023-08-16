const fs = require("fs");

// let dir="./html2";
// let result = fs.existsSync(dir)

// if (!result) {
//     fs.mkdir(dir, error => {
//         if (error) {
//             console.log("建立資料夾失敗");
//             return false;
//         }
//         console.log("建立資料夾成功");
//     })
// }


let dir="./a/b/c";
let result = fs.existsSync(dir)
// console.log(result);

if (!result) {
    // 遞迴{recursive:true}
    fs.mkdir(dir,{recursive:true},error => {
        if (error) {
            console.log("建立資料夾失敗");
            return false;
        }
        console.log("建立資料夾成功");
    })
}
