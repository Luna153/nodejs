let t1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t1 over!");
            resolve();
        }, 2000);
    })

};
let t2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t2 over!");
            resolve();
        }, 4000);
    })

};
let t3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t3 over!");
        }, 1000);
        resolve();
    })

};

// t1();
// t2();
// t3();
// (正常非同步狀況:依照秒數)
//執行結果: t3 > t1 > t2

(async()=>{
    await t1();
    await t2();
    await t3();
})();
//按照順序執行完 才往後
//執行結果: t1 > t2 > t3
