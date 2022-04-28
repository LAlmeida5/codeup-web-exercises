"use strict"

console.log("Yay! I completed the warm-up!")



function fizzBuzz(limit) {
    if (limit === undefined) {          // this is David's "extra" way of doing it. leaving this out (replacing limit in the statement with 100) is also correct.
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

const animals = ["dog", "cat", "frog", "bat"];

function AllFirstLetters(arrOfStrings) {
    let bucket = "";
    for (let el of arr) {
        bucket += el.substring (0,1);
    }
    return bucket;
}


function alphabetize(str) {
    // let strArray = str.split('');                        //This is how each method is used to complete
    // console.log(strArray)
    // let sortedArray = strArray.sort();
    // return sortedArray.join('')
    return str.split('').sort().join('');                   //This is the code refactored to achieve same outcome.
}

console.log(alphabetize("codeup"));
