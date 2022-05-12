"use strict";
(function(){

    let userNumber;

    while (true) {
        userNumber = parseFloat(prompt("Give me an odd number between 1 and 50."))
            if (userNumber % 2 !== 0 && userNumber >= 1 && userNumber <= 50 ) {
                break;
            }
    }

    for(let j = 1; j <= 50; j += 2) {
        if( j === userNumber) {
            console.log("Skipping" + userNumber);
            continue;
        }
        console.log(j);
    }
})();