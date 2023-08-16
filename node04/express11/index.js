const express = require("express")
const app = express()
const path = require("path")
const publicName = path.resolve(__dirname, "/public")

app.use((req, res, next) => {
    let referer = req.get("referer")
    // console.log(referer);
    let ext = path.extname(req.url)
    if (ext) { /*用 if 避免之中有undefined會有空的 */
        ext = ext.slice(1).toUpperCase();
        if (ext === "JPG" || ext === "PNG") {
            if (referer) {
                let url = new URL(referer)
                let hostname = url.hostname
                // console.log(hostname);   
                if (hostname !== "127.0.0.1") {
                    res.status(403).redirect("https://img.freepik.com/premium-vector/street-barrier-with-403-error-access-forbidden_637684-56.jpg?w=2000")
                    return false
                }
            }
        }
    }


    next();
})

app.use(express.static(publicName))

app.get("/", (req, res) => {
    res.send("首頁")
})


app.listen(3000, () => {
    console.log("server is running at 127.0.0.1:3000/");
})