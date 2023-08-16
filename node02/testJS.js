let man={
    name:"Ben",
    mail:"ben@test.com",
    phone:"0922255446",
}
// console.log(man.phone);

// 物件解構賦值
//可以直接用屬性取值
// let {name, mail, phone}=man;
// console.log(name);
// console.log(mail);
// console.log(phone);

// 物件解構賦值2
//自己定義名稱
let {name:ben_name, mail:ben_mail, phone:ben_phone}=man;
console.log(ben_name);
console.log(ben_mail);
console.log(ben_phone);