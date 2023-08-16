const fs = require("fs");

for (let i = 1; i <= 20; i++) {
    const file = `./work${i}.html`;
    const content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homework${i}</title>
    </head>
    <body>
        <h1>這是第${i}個HTML檔</h1>
    </body>
    </html>`;

    try {
        fs.writeFileSync(file, content);
        console.log("2 寫入成功");
    } catch (error) {
        console.log("1 寫入失敗")
    }



    
}

