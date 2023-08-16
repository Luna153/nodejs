const fs=require("fs");

//讀取檔案內容
//size檔案內容大小
//birthtime新增檔案時間
// atime最後讀取時間
// mtime最後修改時間
// ctime檔案最後有變動時間
fs.stat("./video/movie3.mp4", (error, stat)=>{
    if (error) {
                console.log("讀取檔案失敗");
                return false;
            }
            console.log(stat)
})