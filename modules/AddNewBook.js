import Book from './Book.js';
import { mainContainer } from './DOMLoader.js';

const addNewBook = (bookStore) => {
  mainContainer.innerHTML = `
    <h2 class='text-center'>Add a new book</h2>
    <form action='' class='d-flex flex-column w-50 mx-auto gap-4 mt-4'>
      <input
        type='text'
        class='form-control'
        id='titleInput'
        placeholder='Title'
        required
      />
      <input
        type='text'
        class='form-control'
        id='authorInput'
        placeholder='Author'
        required
      />
      <button
        type='submit'
        id='addBtn'
        class='btn btn-primary w-25 align-self-end'>
        Add
      </button>
    </form>
  `;
  // ADD A NEW BOOK
  const addBtn = document.querySelector('#addBtn');
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const titleInput = document.querySelector('#titleInput');
    const authorInput = document.querySelector('#authorInput');
    const titleValue = titleInput.value;
    const authorValue = authorInput.value;

    const newBook = new Book(titleValue, authorValue);

    titleInput.className = 'form-control';
    authorInput.className = 'form-control';

    if (titleValue === '' && authorValue === '') {
      titleInput.className = 'form-control border border-2 border-danger';
      authorInput.className = 'form-control border border-2 border-danger';
      return;
    }
    if (authorValue === '') {
      authorInput.className = 'form-control border border-2 border-danger';
      return;
    }
    if (titleValue === '') {
      titleInput.className = 'form-control border border-2 border-danger';
      return;
    }

    bookStore.addBook(newBook);
    titleInput.value = '';
    authorInput.value = '';
  });
};

export default addNewBook;
