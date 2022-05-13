"use strict";
(function() {
    //Simple Drills
    function returnTwo(){
        return 2;
    }

    console.log(returnTwo());

    function sayHowdy(){
        return "Howdy";
    }

    console.log(sayHowdy());

    function returnName(yourNameHere){
        return yourNameHere;
    }

    console.log(returnName("Luis"));

    function addThree(anyNumber){
        return anyNumber + 3;
    }

    console.log(addThree(27));

// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.

    const arr = ["fred", true , 5, 3];

    const onlyNumbers = arr.filter(
        element => typeof element === 'number'
    );
    console.log(onlyNumbers);
    // Above is a solution I found online.  Looks really clean.-------

    // Below is an answer with help from Dalton the Prodigy.-------

    let mixedData = ['fred', true, 5, 3]
    function filterNumbers(param) {
        if (typeof param !== 'object')
             return;
        let bucket = [];
        for (const el of param) {
            if (typeof el === 'number') bucket.push(el);
        }
        return bucket;
    }

    console.log(filterNumbers(mixedData));

    let dogStats = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ];

    function getOlder(arr) {
        for(let i = 0; i < arr.length; i++) {  // arr.length is used to iterate through the array objects.
            arr[i].age += 1;        // arr[i] is used to access the array objects // .age accesses the "age property" += 1 added one to eat age property within the object.
        }
        return arr;                     // returns the changes in the array.
    }

    console.log(getOlder(dogStats));        //calls the function and passes the array.

// or this way...

    //     function getOlder(arr){         // Basically this for loop is iterating through each object within the array.
    //     for(let obj of arr){                // obj is an element, you can name this anything you want.  Typically use single of plural i.e. (let bread of breads)
    //         obj.age += 1;
    //     }
    //     return arr;
    // }
    //
    // console.log(getOlder(dogStats));


}())

