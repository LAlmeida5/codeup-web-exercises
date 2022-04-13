console.log("Hello from external Javascript")

alert("Welcome to my website!");

let userInput = prompt("What is your favorite color?");
console.log(alert( "Great, " + userInput + " is my favorite color too!"));

alert("I see you have some movies you want to rent, that's awesome! Rental rates are just $3 per day.");

let firstRental = parseFloat(prompt("How many days do you want to rent the Little Mermaid?"));
console.log(alert(firstRental + " Days"));

let secondRental = parseFloat(prompt("How many days do you want to rent Brother Bear?"));
console.log(alert(secondRental + " Days"));

let thirdRental = parseFloat(prompt("How many days do you want to rent Hercules?"));
console.log(alert(thirdRental + " Days"));

let rentalTotal = (firstRental + secondRental + thirdRental) * 3;

alert("The total for your rentals is: $" + rentalTotal + " Dollars");

alert("I see you're a contractor for several companies. Let me help you calculate your wages.");

let googleContract = parseFloat(prompt("You make $400/hr over at Google. How many hours did you work?"));
console.log(alert(googleContract + " hours"))

let googleTotal = (googleContract * 400);

let amazonContract = parseFloat(prompt("You make $380/hr over at Amazon. How many hours did you work?"));
console.log(alert(amazonContract + " hours"))

let amazonTotal = (amazonContract * 380);

let facebookContract = parseFloat(prompt("You make $350/hr over at Facebook. How many hours did you work?"));
console.log(alert(facebookContract + " hours"))

let facebookTotal = (facebookContract * 350);

let contractTotal = (googleTotal + amazonTotal + facebookTotal)

alert("Stellar performance!! Your contracts landed you a total pay of $" + contractTotal + " Dollars!!");


