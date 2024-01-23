// 覚えること
// 1. constは通常、letはたまに、varは絶対だめ

// --------------------fuctions part two-------------------
const sayHelloFucntion = function (name) {
    console.log("Hello! " + name);
};

const names = "Changyu!";

const player = {
    name: "changyu",
    sayHello: function name(names) {
        console.log("Hello! " + names);
    }
};
// alertは ,で区切って使う
alert("hi", sayHelloFucntion(names), player.sayHello("yurina"));

function plus(a, b) {
    return a + b;
};
const calculator = {
    plus: function(a, b) {
        return a + b; // returnの後は何も実行されない
        console.log("これは実行されない");
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    times: function(a, b) {
        return a * b;
    },
    power: function(a, b) {
        return a ** b;
    }
};
const a = 6;
const b = 3;

const plusResult = calculator.plus(a, b);
const minusResult = calculator.minus(a, b);
const divideResult = calculator.divide(a, b);
const timesResult = calculator.times(a, b);
const powerResult = calculator.power(a, b);