let a;


//()()立即執行函數
//建立一個 async 的環境
//類似把async函數當成一個方法的參數
(async () => {
    console.log("開始");
    let result = await t1();
    console.log("result = " + result);
    console.log("結束, a+a=" + (a + a));

})();

// async function doThing() {
//     將非同步 ->同步
//     要 await 把要執行的內容放到 async
//     console.log("開始");
//     let result = await t1();
//     console.log("result = " + result);
//     console.log("結束, a+a=" + (a + a));
// }
// doThing();

// new Promise((resolve, reject) => {
//Promise執行內容:成功執行resolve 失敗執行reject
// setTimeout(() => {
// a = 10;
// console.log("進行中");
// resolve();
// reject("錯誤");
// }, 0);
// }).then(() => {
//成功
// }).catch((error) => {
//失敗
// console.log(error)
// });


function t1() {
    return new Promise((resolve, reject) => {
        // return resolve / return reject
        setTimeout(() => {
            a = 10;
            console.log("進行中");
            resolve("成功");
            // reject("錯誤");
        }, 0);
    });
}




