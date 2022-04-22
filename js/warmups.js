"use strict"

console.log("Yay! I completed the warm-up!")



function fizzBuzz(limit) {
    if (limit === undefined) {          // this is David's "extra" way of doing it. leaving this out is also correct.
        limit = 100;
    }
    for (let x = 1; x <= limit; x++) {
        if (x % 15 === 0) {
            console.log("FizzBuzz");
        }else if (x % 5 === 0){
            console.log("Buzz");
        }else if (x % 3 === 0) {
            console.log("Fizz");
        }else {
           console.log(x)
        }
    }
}

fizzBuzz();