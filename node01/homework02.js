const fs=require("fs");

for(let i=1;i<=20;i++){
    fs.renameSync(`./work${i}.html`,`./work/work${i}.html`)

    fs.rename(`./work${i}.html`,`./work/work${i}.html`,error=>{
        if(error){
            console.log("失敗");
            return false;
        }
        console.log("成功:"+i)
    })
    //有流水編號用sync
}