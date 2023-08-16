const express = require("express")
const app = express()
const img = {
    img1:"15226974",
    img2:"17848606",
    img3:"17787434",
    img4:"6187159",
    img5:"7539498"
}

app.get("/", (req,res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    let content = ""
let style = "style='height:300px;width:200px'"
    for(const key in img){
        content += `<a href='/photo/${img[key]}'><img ${style} src='https://images.pexels.com/photos/${img[key]}/pexels-photo-${img[key]}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></a>`
    }
    res.end(content)
    // res.end(`<a href='/photo/7539498'><img ${style} src='https://images.pexels.com/photos/7539498/pexels-photo-7539498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></a><a href='/photo/6187159'><img ${style} src='https://images.pexels.com/photos/6187159/pexels-photo-6187159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></a><a href='/photo/17787434'></img><img ${style} src='https://images.pexels.com/photos/17787434/pexels-photo-17787434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></a><a href='/photo/17848606'></img><img ${style} src='https://images.pexels.com/photos/17848606/pexels-photo-17848606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></a><a href='/photo/15226974'></img><img ${style} src='https://images.pexels.com/photos/15226974/pexels-photo-15226974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></a>`)
})
app.get("/photo/:id/",(req, res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    let style = "style='height:900px;width:650px'"
    let id = req.params.id
    let img = `<img ${style} src='https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg'></img>`
    // if(id === "15226974"){
    //     img=`<img ${style} src='https://images.pexels.com/photos/15226974/pexels-photo-15226974.jpeg'></img>`
    // }else if(id === "17848606"){
    //     img=`<img ${style} src='https://images.pexels.com/photos/17848606/pexels-photo-17848606.jpeg'></img>`
    // }else if(id === "17787434"){
    //     img=`<img ${style} src='https://images.pexels.com/photos/17787434/pexels-photo-17787434.jpeg'></img>`
    // }else if(id === "6187159"){
    //     img=`<img ${style} src='https://images.pexels.com/photos/6187159/pexels-photo-6187159.jpeg'></img>`
    // }else if(id === "7539498"){
    //     img=`<img ${style} src='https://images.pexels.com/photos/7539498/pexels-photo-7539498.jpeg'></img>`
    // }
    res.end(img)
})

app.get("/books/:cate/:bookid", (req, res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    let cate = req.params.cate
    let bookid = req.params.bookid
    res.end(`分類id ${cate}; 以及書本編號${bookid}`)
})

app.get("/user/:name?", (req, res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    let name = req.params.name
    if(name){
        res.end(`你好，${name}`)
    }else{
        res.end(`你好，陌生人`)
    }
})

// 不確定後面路徑有幾層時會用*
app.get("/file/*", (req, res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8")
    let name = req.params[0]
    res.end(`檔案是：${name}`)
    
})


app.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})