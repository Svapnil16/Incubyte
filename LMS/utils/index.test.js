// utils/errors.js
class BookNotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = 'BookNotFoundError';
    }
  }
  
  class BookNotAvailableError extends Error {
    constructor(message) {
      super(message);
      this.name = 'BookNotAvailableError';
    }
  }
  
  module.exports = { BookNotFoundError, BookNotAvailableError };



test('sample test', () => {
  expect(true).toBe(true);
});