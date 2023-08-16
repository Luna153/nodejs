//使用 js URL 物件 取用 pathname 和 query
//大寫 URL 是 js 內建模組
const http = require("http");;

const server = http.createServer((req, res) => {
    // console.log("要求方法是: " + req.method);
    // console.log("要求路徑是: " + req.url)

    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Template</title>
        <style>
            .row {
                display: flex;
                width: 180px;
            }
    
            .col {
                width: 60px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
    
            .col:not(:first-child) {
                border-left: 1px solid #000;
            }
    
            .row:nth-child(odd) {
                background-color: #aebf98;
            }
    
            .row:nth-child(even) {
                background-color: #667653;
            }
    
            .active {
                background-color: #c28d8d;
                color: #fff;
            }
        </style>
    </head>
    
    <body>
        <div class="row">
            <div class="col">1-1</div>
            <div class="col">1-2</div>
            <div class="col">1-3</div>
        </div>
        <div class="row">
            <div class="col">2-1</div>
            <div class="col">2-2</div>
            <div class="col">2-3</div>
        </div>
        <div class="row">
            <div class="col">3-1</div>
            <div class="col">3-2</div>
            <div class="col">3-3</div>
        </div>
        <div class="row">
            <div class="col">4-1</div>
            <div class="col">4-2</div>
            <div class="col">4-3</div>
        </div>
        <script>
            const cols = document.querySelectorAll(".col");
            [...cols].map(col => {
                col.addEventListener("click", function () {
                    (this.classList.contains("active"))
                        ? this.classList.remove("active")
                        : this.classList.add("active");
                });
            });
        </script>
    </body>
    
    </html>`);
})

server.listen(9000, () => {
    console.log("服務已啟動 http://localhost:9000/")
})