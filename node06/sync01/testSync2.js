const fs = require("fs");


let t1 = (file) => {
    //新增參數file
    return new Promise((resolve, reject) => {
        // file 代替 "./aaa.log"
        fs.readFile(file, (error, data) => {
            //readFile:要讀的檔案, (執行函數(錯誤error,成功data))
            if (error) {
                reject(error);
                return false;
            }
            resolve(data);
        })
    })
}


(async () => {
    let result = await t1("./aaa.log");
    // result 是 buffer 所以要 toString
    console.log(result.toString());
    result = await t1("./bbb.log");
    console.log(result.toString());
    result = await t1("./ccc.log");
    console.log(result.toString());
})();

// Promise { <pending> } =>進行中
//執行結果有三種 成功(resolve) 失敗(reject) 進行中(pending)