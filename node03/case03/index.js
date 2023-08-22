// const uniq=require("uniq");

// let ary = [1, 1, 2, 2, 3, 5];
// let result=uniq(ary);
// console.log(result);
//把重複的省略


//hw
const moment = require('moment'); 
let nowTime=moment().format("YYYY年MM月DD日 HH時mm分ss秒"); 
//format格式化輸出
// 可搭配moment一起使用

console.log(`時間: ${nowTime}`)
