if (pathname === "/htdocs/page1.html") {
    res.setHeader("content-type", "text/html;charset=utf-8");
    let file = path.resolve(__dirname + "/htdocs/page1.html");
    let data = fs.readFileSync(file);
    res.end(data);
}else if(pathname==="/htdocs/css/page1.css"){
    let file = path.resolve(__dirname + "/htdocs/css/page1.css");
    let data = fs.readFileSync(file);
    res.end(data);
}else if(pathname==="/htdocs/js/page1.js"){
    let file = path.resolve(__dirname + "/htdocs/js/page1.js");
    let data = fs.readFileSync(file);
    res.end(data);
}else if(pathname==="/htdocs/images/img06.jpeg"){
    let file = path.resolve(__dirname + "/htdocs/images/img06.jpeg");
    let data = fs.readFileSync(file);
    res.end(data);
}else{
    res.statusCode=404;
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("<h1>找不到此頁!!!</h1>")
}