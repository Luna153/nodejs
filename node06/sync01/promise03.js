//同步vs非同步
let a;
console.log("開始");

setTimeout((after) => {
    //將函數當成參數
    a = 10;
    console.log("事件進行中");
    after();
    //after(call back function)

}, 0, end);

function end() {
    console.log("結束, a+a=" + (a + a));
}

//開始->事件進行中->結束, a+a=20
