const express = require("express")
const app = express()
const { singers } = require("./singers.json")
// console.log(singers[0].id);
app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("首頁")
})

app.get("/singer/:id.html", (req, res) => {
    let id = req.params.id;
    let result = singers.find(singer => {
        // if (singer.id === +id) {
        //     return true;
        // }
        return (singer.id === +id)
    });
    // res.json(result);
    res.end(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${result.singer_name} 's page</title>
        </head>
        <body>
            <h1>${result.singer_name}</h1>
            <img src="${result.singer_img}" alt="">
        </body>
        </html>
        `
    )
})

// res.json可以將JSON資料印在網頁上
// app.get("/singers", (req, res)=>{
//     res.json(singers)
// })

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000/");
})