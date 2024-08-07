// *************************** Day7 ********************************

// Object Creation and Access -->

//Create an object representing a book with proeperties like title, author,
// and year, and log the object to the console. 

let book = {
    title: 'rich dad poor dad',
    author: 'user',
    year: '2012',
    info: function () {
        return `${this.author} ${this.title}` 
    },
    updateyear: function (val) {
        return this.year = val;

    }
}
console.log(book);

// Access and log the title and author properties of the book object

let book_author = book.author
let book_title  = book.title
let book_year = book.year
console.log(book_author, book_title, book_year);

// Object Methods --> 

// Add a method to a book object that returns a string with the book's title
// and author, and log the result of calling this method

console.log(book.info());
book.updateyear(2024)
console.log(book);

// Object Iteration --> 

// use a for ... in loop to iterate over the properties of the book object
// and log each property and its value.

for (let key in book) {
    console.log(key, book[key]);
    
}
// Use Object.keys and Object.values methods to log all the keys and values
// of the book object

console.log(Object.keys(book));
console.log(Object.values(book));


