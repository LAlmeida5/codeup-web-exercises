"use strict";

    function showMultiplicationTable(num) {
        for (let x = 1; x <= 10;  x++){
            let multiply = num * x;
            console.log(num + " X " + x + " = " + multiply);
        }
    }

console.log(showMultiplicationTable(7));

    // ex # 3.

let randomNumber = Math.floor(Math.random() * 10);

function evenOrOdd(num) {
    for(let y = 1; y <= 10; y++) {
        if (num % 2 === 0) {
            console.log(num + " is "+ "even");
        } else {
            console.log(num + " is "+ "odd");
        }
    }
}
console.log(evenOrOdd(randomNumber));