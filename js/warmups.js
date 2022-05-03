// "use strict"
//
// console.log("Yay! I completed the warm-up!")
//
//
//
// function fizzBuzz(limit) {
//     if (limit === undefined) {          // this is David's "extra" way of doing it. leaving this out (replacing limit in the statement with 100) is also correct.
//         limit = 100;
//     }
//     for (let x = 1; x <= limit; x++) {
//         if (x % 15 === 0) {
//             console.log("FizzBuzz");
//         }else if (x % 5 === 0){
//             console.log("Buzz");
//         }else if (x % 3 === 0) {
//             console.log("Fizz");
//         }else {
//            console.log(x)
//         }
//     }
// }
//
// fizzBuzz();
//
// const animals = ["dog", "cat", "frog", "bat"];
//
// function AllFirstLetters(arrOfStrings) {
//     let bucket = "";
//     for (let el of arr) {
//         bucket += el.substring (0,1);
//     }
//     return bucket;
// }
//
//
// function alphabetize(str) {
//     // let strArray = str.split('');                        //This is how each method is used to complete
//     // console.log(strArray)
//     // let sortedArray = strArray.sort();
//     // return sortedArray.join('')
//     return str.split('').sort().join('');                   //This is the code refactored to achieve same outcome.
// }
//
// console.log(alphabetize("codeup"));
//
// //warm up completion with a ternary function
// const sum=[1, 2, 3, 4, 5].reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum);
//
// //or
//
// //completed with a "standard function" this was David's example.
// function sumOfElements(arr) {
//     let bucket = 0;
//     for(let el of arr) {
//         bucket += el;
//     }
//     return bucket;
// }
//
// console.log(sumOfElements([1, 2, 3, 4, 5]));
// console.log(sumOfElements([19, 27, 44, 3]));


//Create a function, returnProductEssentialDetails, that takes in a product object and
// returns a simpler product object containing only the product name and price in cents

let product1 = {
    name: 'Hammer',
    priceInCents: 400,
    description: 'It is a  hammer.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}

function returnProductEssentialDetails(product) {
    return  {
        name: product.name,
        priceInCents: product.priceInCents
    };
}

console.log(returnProductEssentialDetails(product1));

let products: [product1, product2, product3];

function returnAllProductsEssentialDetails(product) {
    let productsOutput = [];
    products.forEach(function(product)) {
        productsOutput.push(returnProductEssentialDetails(product));
    });
        return productsOutput;
}