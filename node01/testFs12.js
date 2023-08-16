const fs = require("fs");

// fs.readdir("./video", (error,data)=>{
//     if (error) {
//         console.log("讀取資料夾失敗");
//         return false;
//     }
//     console.log(data);
//     讀取方式是陣列[ 'movie.mp4', 'movie2.mp4', 'movie3.mp4', 'movie4.mp4' ]
// })


// "./"讀取NODE01內全部資料
// let data=fs.readdirSync("./")
// console.log(data)

// fs.rmdir("./html", error => {
//     if (error) {
//         console.log("刪除資料夾失敗");
//         return false;
//     }
//     console.log("刪除資料夾成功")
// });


//刪除./a/b/c失敗只會刪除c
//刪除./a失敗
//./a,{recursive:true}成功:刪除a及底下的資料夾
// fs.rmdir("./a",{recursive:true}, error => {
//     if (error) {
//         console.log("刪除資料夾失敗");
//         return false;
//     }
//     console.log("刪除資料夾成功")
// });

fs.rmSync("./html2",{recursive:true})
//加{recursive:true}


// fs.rmdir("./html2",{recursive:true}, error => {
//     if (error) {
//         console.log("刪除資料夾失敗");
//         return false;
//     }
//     console.log("刪除資料夾成功")
// });