const name = "Kenny";
const country = "Taiwan";

function sayName() {
    console.log(name);
}
function sayCountry() {
    console.log(country);
}

// module.exports = {
//屬性名稱:function
//     sayName: sayName,
//     sayCountry: sayCountry
// };

// module.exports = {
//     //同名屬性 簡化
//     sayName, sayCountry
// };

exports.sayName = sayName;
exports.sayCountry = sayCountry;
