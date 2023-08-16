const mysql = require("mysql2");
const connection = require("./db");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    const id = req.params.id;
    res.send("首頁");
})
app.get("/d/:id", (req, res) => {
    const id = req.params.id;
    connection.execute(
        "SELECT * FROM `sort` WHERE `id` = ?",
        [id],
        (error, results) => {
            //map執行迴圈
            let sort = results.map(item=>{
                return {itemId:item.id, itemName:item.name}
            });
            res.json({ sort })
        }
    )
})
app.listen(3000, () => {
    console.log("server is running!");
})

//改用db引入
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'admin',
//     password: '12345',
//     database: 'nodejs'
// });

//測試
//   connection.query(
//     'SELECT * FROM `sort`',
//     function(err, results, fields) {
//       console.log(results);
//       console.log(fields);
//     }
//   );

//單獨一句
// connection.query("SELECT * FROM `sort`", (error, result) => {
//     console.log(result)
// })

// 使用一個變數
// connection.query(
//     "SELECT * FROM `sort` WHERE `id` = ?",
//     //陣列放要 query 的內容
//     [4],
//      (error, result) => {
//     console.log(result)
// })

//執行SQL
// connection.execute(
//     "SELECT * FROM `sort` WHERE `id` = ?",
//     [6],
//     (error, result) => {
//         console.log(result);
//     }
// )



