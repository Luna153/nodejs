//同步vs非同步
let a;
console.log("開始");

setTimeout(() => {
    a = 10;
    console.log("事件進行中");
}, 0);

console.log("結束, a+a=" + (a + a));
// 非同步的執行結果:
//開始->結束, a+a=NaN->事件進行中