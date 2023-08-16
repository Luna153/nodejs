//同步vs非同步
let a;
console.log("開始");


new Promise((resolve, reject) => {
    //Promise執行內容:成功執行resolve 失敗執行reject
    setTimeout(() => {
        a = 10;
        console.log("進行中");
        // resolve();
        reject("錯誤");
    }, 0);
}).then(() => {
    //成功
    console.log("結束, a+a=" + (a + a));
}).catch((error) => {
    //失敗
    console.log(error)
});








// Promise 的格式
// new Promise(function (resolve, reject) {
//     resolve成功 reject失敗
//     resolve();
//     reject();
// });


// new Promise( (resolve, reject)=> {
//     resolve({});
//     reject("失敗");
// });
