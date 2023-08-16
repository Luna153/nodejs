//同步vs非同步
console.log("開始");

setTimeout(()=>{
    console.log("事件進行中");
}, 0);

console.log("結束");
//開始->結束->事件進行中
// setTimeout開支線另外進行(非同步)
// (非同步):ajax、jquery、post/get