//方法一
// let b = 3;
// let newB;
// if (b < 10) {
//     newB = "0" + b;
// }
// console.log(newB);

//方法二
// let a = 3;
// let newA = a.toString().padStart(2, "0");

// console.log(newA);


const fs = require("fs")
const dir = "./work";
//foreach跑陣列work資料夾內的所有檔案
let files = fs.readdirSync(dir);
// console.log(file);
files.forEach((file) => {
    let ary = file.split(".")
    // ary[0]=work* ,ary[1]=html
    // parseInt字串轉int
    let num = parseInt(ary[0].substring(4));
    if (num < 10) {
        num = "0" + num;
        let newFile = dir + "/work"+num+"."+ary[1];
        fs.renameSync(dir+"/"+file,newFile)
    }

});



// let file = "work1.html";
// let ary = file.split(".")
// console.log(ary);
//work** 從第4個開始
//substring取得字串
// let num = ary[0].substring(4);
// if (num < 10) {
//     num = "0" + num;
//     let newFile = "work" + num + "." + ary[1]
//     console.log(num)
// }


