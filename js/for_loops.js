"use strict";
(() => {

    function showMultiplicationTable(num) {
        for (let x = 1; x <= 10;  x++){
            let multiply = num * x;         // this variable is set to store the product of the "math" being done.
            console.log(num + " X " + x + " = " + multiply);
        }
    }

showMultiplicationTable(7);

    // ex # 3.



function evenOrOdd() {
    for(let y = 1; y <= 10; y++) {                                                                             //
        let randomNumber = Math.floor(Math.random() * 181) + 20                  // generates random  number between 20 and 200
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is "+ "even");
        } else {
            console.log(randomNumber + " is "+ "odd");
        }
    }
}
evenOrOdd();
// there are two methods to achieve the same output:
function pyramid() {                    //option one for ex# 4
    for (let z = 1; z < 10; z++) {
        let str = "";
        for( let y = 1; y <= z; y++) {
            str += z;                           // str = str + z;
        }
        console.log(str);
    }
}
pyramid();

    function numberPyramid() {          //option 2 for ex#4
        for (let z = 1; z < 10; z++) {
            console.log(z.toString().repeat(z));
        }
    }
numberPyramid();

    // ex5
    function countingDownMultiples(startingValue) {
        for (startingValue; startingValue > 0; startingValue -= 5) {
            console.log(startingValue);
        }
    }
    countingDownMultiples(100);




})();