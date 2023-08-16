const ejs = require("ejs")
const fs = require("fs")
const path = require("path")


let user;
user = {
    name: "Leia",
    img: "https://randomuser.me/api/portraits/women/64.jpg"
}

// if(user){
//     console.log(`
//         <img src="${user.img}"><span>${user.name}</span><br>
//         <button>登出</button>
//     `);
// }else{
//     console.log(`
//         <button>登入</button><button>註冊</button>
//     `);
// }

let template = fs.readFileSync(path.resolve(__dirname, "./template03.html")).toString()

let result = ejs.render(template, {user})

console.log(result);