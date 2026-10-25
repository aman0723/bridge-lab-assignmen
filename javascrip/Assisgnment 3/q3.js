
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
            return;
        }

        this.isIssued = true;
        console.log(`${this.title} issued successfully.`);
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} was not issued.`);
            return;
        }

        this.isIssued = false;
        console.log(`${this.title} returned successfully.`);
    }
}

const books = [
    new Book("JavaScript Basics", "Amit", "101"),
    new Book("Python Basics", "Riya", "102"),
    new Book("Web Development", "Rahul", "103")
];

function displayAvailableBooks() {
    const available = books.filter(book => !book.isIssued);

    console.log("Available Books:");

    available.forEach(book => {
        console.log(`${book.title} | ${book.author} | ${book.ISBN}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();
issueBookByISBN("102");
displayAvailableBooks();
