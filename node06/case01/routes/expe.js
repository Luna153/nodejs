const express = require('express');
const moment = require('moment')
const multer = require("multer");
const connection = require("../db")
const router = express.Router();
const upload = multer();

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('導向今天的日期');
    let today = moment().format("YYYY-MM-DD")
    res.redirect("/expe/d/" + today)
});

router.get('/d/:date', async (req, res, next) => {
    // res.send('讀取 指定日期的消費');
    let date = req.params.date;
    let sort;
    try {
        sort = await getSort();
    } catch (error) {
        console.log(error);
    }
    // console.log(sort)
    let dateData = await getDateData(date).then((data) => {
        return data;
    }).catch((error) => {
        console.log(error)
        return undefined;
    });
    console.log("======================")
    console.log(dateData);
    if (sort && dateData) {
        res.render('index', { date, sort, dateData });
    } else {
        //抓不到資料表的時候 ex: sort1
        res.send("錯誤發生, 請洽系統管理員")
    }

});

router.post('/', (req, res, next) => {
    // res.send('寫入 指定日期的消費');
    // console.log(req.body);
    let title = req.body.title;
    let money = parseInt(req.body.money);
    let sort = parseInt(req.body.sort)
    let date = req.body.date;
    // date 在 canvas 以外的內容 
    // return false;
    connection.execute(
        "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?)",
        [title, sort, money, date],
        (error, results) => {
            if (error) {
                res.json({ error });
                return false;
            }
            // res.json({results});
            res.redirect("/expe/d/" + date);
        }
    )
});

router.put('/', upload.none(), async (req, res) => {
    console.log(req.body)
    //修改預設送到req.body
    //output:{}=>內容無法讀取
    //npm i multer
    // res.json({ message: '修改 指定日期的消費' });
    let result = await updateData(req.body).
        then((data) => {
            return 1;
            //成功
        }).catch((error) => {
            return 0;
            // 失敗
        })
        res.json({result})
});

router.delete('/', upload.none(), async(req, res) => {
    // res.json({ message: '刪除 指定日期的消費' });
    let result = await deleteData(req.body).
        then((data) => {
            return 1;
            //成功
        }).catch((error) => {
            return 0;
            // 失敗
        })
        res.json({result})
});

module.exports = router;

function deleteData(data) {
    let title = data.title;
    let sort = parseInt(data.sort);
    let money = parseInt(data.money);
    let id = parseInt(data.id);
    return new Promise((resolve, reject) => {
        connection.execute(
            // 公式:
            // "SQL",
            // [],
            // ()=>{}
            "DELETE FROM expense WHERE `expense`.`id` = ?",
            [id],
            (error, results) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(results);
            }
        );
    })
}


function updateData(data) {
    let title = data.title;
    let sort = parseInt(data.sort);
    let money = parseInt(data.money);
    let id = parseInt(data.id);
    return new Promise((resolve, reject) => {
        connection.execute(
            // 公式:
            // "SQL",
            // [],
            // ()=>{}
            "UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ? WHERE `expense`.`id` = ?",
            [title, sort, money, id],
            (error, results) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(results);
            }
        );
    })
}

function getDateData(date) {
    return new Promise((resolve, reject) => {
        connection.execute(
            "SELECT * FROM `expense` WHERE `date` = ?",
            [date],
            (error, results) => {
                if (error) {
                    reject({ error });
                    return false;
                    //讓程式終止
                }
                resolve(results);
            }
        )
    })


}

function getSort() {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM `sort`",
            (error, results) => { //, fileds第三個參數可省略
                if (error) {
                    reject(error);
                    return false;
                }
                let sort = results.map(results => {
                    return { id: results.id, name: results.name };
                });
                resolve(sort);
            }
        )
    });
}
