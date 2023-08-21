const name="Kenny";

function sayName(){
    console.log(name);
}

module.exports=sayName;
// 公開模組化
//搭配require("路徑") 
// ex: const sayName=require("./boy.js");
//即可互叫