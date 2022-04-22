"use strict";
(function(){

    function multiplyBy2() {
        let x = 1;
        while (x < 65536) {
            x *= 2;
            console.log(x);
        }
    }
    multiplyBy2();

    // This is how you get a random number between 50 and 100
    let allCones = Math.floor(Math.random() * 51) + 50;

    do {
        // This expression will generate a random number between 1 and 5
        let customerOrder = Math.floor(Math.random() * 5) + 1;
        console.log("Customer orders " + customerOrder + " cone(s). We have " + allCones + " left in stock");
        if (customerOrder > allCones) {
            console.log( "Sorry!,Your order cannot be fulfilled.");
        } else {
            allCones -= customerOrder;
            console.log("Here you go! We now have " + allCones + " left in stock.");
        }
    }while (allCones > 0);
    console.log("We sold out of all cones! Time to go home!")




})();