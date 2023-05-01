import { getBooks, saveBooks } from './Storage.js';

export default class BookStore {
  constructor() {
    this.getData();
  }

  // Add book to booksArray
  addBook(book) {
    book.id = this.booksArray.length + 1;
    this.booksArray.push(book);
    saveBooks(this.booksArray);
  }

  getData() {
    this.booksArray = getBooks();
  }

  // Remove book from booksArray
  remove(id) {
    this.booksArray = this.booksArray.filter((bookItem) => Number(bookItem.id) !== Number(id));
    saveBooks(this.booksArray);
  }

  // Show books in DOM
  render() {
    let content = '';
    this.booksArray.forEach((book) => {
      content += `
    <li class="w-100 mx-auto list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
      <h5>"${book.title}" by ${book.author}</h5>
      <button type="button" id="${book.id}" class="remove-btn border border-dark border-3 bg-danger text-light rounded">Remove</button>
    </li>`;
    });
    return content;
  }

  // Check if empty
  empty() {
    return this.booksArray.length === 0;
  }
}
