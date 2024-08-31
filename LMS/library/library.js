// lib/Library.js
class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push({ ...book, isBorrowed: false });
    }
  
    borrowBook(isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) throw new Error('Book not found');
      if (book.isBorrowed) throw new Error('Book is not available');
      book.isBorrowed = true;
    }
  
    returnBook(isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) throw new Error('Book not found');
      book.isBorrowed = false;
    }
  
    getAvailableBooks() {
      return this.books.filter(book => !book.isBorrowed);
    }
  }
  
  module.exports = Library;