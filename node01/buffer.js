// buffer記憶體
// alloc劃分10個單位的記憶體
const buf1=Buffer.alloc(10);
// console.log(buf1);


const buf2=Buffer.from("hello");
console.log(buf2);
console.log(buf2.toString());