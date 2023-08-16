const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("hello!!!!!!");
})
//cmd:nodemon index.js
server.listen(9000, ()=>{
    console.log("server is running at http:localhost:9000/");
})