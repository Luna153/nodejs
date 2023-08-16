const express = require("express")
const app = express()
const front = require("./routes/front")
const back = require("./routes/back")
const user = require("./routes/user")

app.use(front)
app.use(back)
app.use("/user", user) /*都有的路徑可以簡化前綴路徑 */

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})