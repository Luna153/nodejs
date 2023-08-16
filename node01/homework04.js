const fs = require("fs");

//查詢資料夾
// let exist=fs.existsSync("./zero");
// console.log(exist)

let createDir = "./zero"
//寫入資料夾
fs.mkdirSync(createDir)

for (let i = 1; i <= 20; i++) {
    //建立檔案
    const createFile = `./zero/work${i}.html`
    const content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homework${i}</title>
    </head>
    <body>
        <h1>這是第${i}個HTML檔</h1>
    </body>
    </html>`;

    try {
        //寫入createFile+content
        fs.writeFileSync(createFile, content);
        console.log("2 寫入成功");
    } catch (error) {
        console.log("1 寫入失敗")
    }


    const dir = "./zero";
    //讀取zero資料夾所有資料丟進變數files
    let files = fs.readdirSync(dir);
    // files跑迴圈
    files.forEach((file) => {
        // 每筆資料用split(".")分開變成ary[0](work**),ary[1](html)
        let ary = file.split(".")
        // ary[0]=work**第四個字串轉成整數int丟進num
        let num = parseInt(ary[0].substring(4));
        if (num < 10) {
            num = "0" + num;
            let newFile = dir + "/work" + num + "." + ary[1];
            fs.renameSync(dir + "/" + file, newFile)
        }

    });
}