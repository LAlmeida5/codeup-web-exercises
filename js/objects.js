(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {firstName: "Luis", lastName: "Almeida"};
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        if(shopper.amount > 200){
            let discount = shopper.amount * .12;
            let dTotal = shopper.amount - discount ;
            console.log(shopper.name + " , Your total is $" + shopper.amount.toFixed(2) + " Your discount is $" + discount.toFixed(2) + " Your new total is $" + dTotal.toFixed(2));
        } else {
            console.log(shopper.name + ", you dont have any discounts pending, your total is $ " + shopper.amount);
        }
    });

    // This was my first try:
    // function discountFunction(shopper) {
    //     let discount = this.amount * 12
    //     if (this.amount >= 200) ;
    //     return name + ", your order qualified for a discount! Your previous total was $"
    //         + this.amount + " Your discount was $ " + discount + "Your new total is $" +
    //         (this.amount - discount) + "!";
    //     }else{
    //         return name + " , no discounts have been applied. Your total is $" + this.amount + "."
    // }



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: "Harry Potter and the Sorcerer's Stone", author:{firstName: "J.K.", lastName: "Rowling"}},
        {title: "Verity", author:{firstName: "Colleen", lastName: "Hoover"}},
        {title: "Finding Me: A Memoir", author:{firstName: "Viola", lastName: "Davis"}},
        {title: "Where the Crawdads Sing", author:{firstName: "Delia", lastName: "Owens"}},
        {title: "The Very Hungry Caterpillar", author:{firstName: "Eric", lastName: "Carle"}}
    ];
    console.log(books);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, index) {
        console.log("Book # "+ (index + 1) +  "\n" +"Title: " + book.title + "\n" + "Author: "  + book.author.firstName + " " + book.author.lastName)
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, author) {
        let authorArr = author.split(" ");
        if (authorArr.length < 2) {
            return {
                title,
                author: {
                    firstName: "",
                    lastName: authorArr[0]
                }
            }
        } else {
            return {
                title,
                author: {
                    firstName: authorArr[0],
                    lastName: authorArr[1]
                }
            }
        }
    }

    let title = prompt("Hey tell me you favorite book's title!");
    let author= prompt("And who wrote that?");

    let booksFromPrompt = createBook(title, author);
    console.log(booksFromPrompt);

    const library = [createBook("Garfield Loses His Feet", "jim Davis"), createBook("Les Miserables", "Victor Hugo")];

    function showBookInfo(book) {
        return "Title: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName;
    }

    function showAllBooksInfo(books) {
        let count = 1;
        let str = "";
        for(let book of books) {
            str += "Book #" + count++ + "\n" + showBookInfo(book) + "\n ";
        }
    }


})();
