// --------------------prompt-------------------
// 1. promptが実行された時からユーザーが値を入力するまでページは停止の状態になる。
// 2. promptを使わない理由
//      ・cssが使えない。➡　地味
//      ・ページが停止されるから
//      ・昔の機能
let age = prompt("How old are you?");

console.log(age);

console.log(typeof age); // ageのtypeが出力される。

const changeAge = 33;

console.log(typeof age, typeof parseInt(changeAge));

console.log(age, typeof parseInt(changeAge));

while(true) {
    if(isNaN(age)) {
        alert("Please write a number");
        age = prompt("How old are you?");
    } else {
        console.log("Thank you for writing your age.");
        break;
    }
}