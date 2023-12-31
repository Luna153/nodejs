const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "z_test")));


app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./test.html"))
})

app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000");
})