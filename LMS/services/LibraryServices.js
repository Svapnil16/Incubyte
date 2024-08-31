// services/LibraryService.js
const Library = require('../lib/Library');

class LibraryService {
  constructor() {
    this.library = new Library();
  }

  addBook(book) {
    this.library.addBook(book);
  }

  borrowBook(isbn) {
    this.library.borrowBook(isbn);
  }

  returnBook(isbn) {
    this.library.returnBook(isbn);
  }

  getAvailableBooks() {
    return this.library.getAvailableBooks();
  }
}

module.exports = LibraryService;