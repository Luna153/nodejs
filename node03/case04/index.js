const http = require("http");
const moment=require("moment");

const server = http.createServer((req, res) => {
    const moment = require('moment');
    let nowTime = moment().format("YYYY年MM月DD日 HH時mm分ss秒");
    //format格式化輸出
    // 可搭配moment一起使用

    console.log(`時間: ${nowTime}`)
    // res.end(nowTime)
    res.end(`hello ~ Now is ${nowTime}`);
})


//cmd:nodemon index.js
server.listen(9000, () => {
    console.log("server is running at http:localhost:9000/");
})