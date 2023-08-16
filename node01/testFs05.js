const fs=require("fs");

//讀檔
fs.readFile("./測試寫入.txt", function(error,data){
    if(error){
        console.log("讀取失敗");
        return false;
    }
    console.log(data.toString());
    //結果是buffer
    //轉成文字toString

});