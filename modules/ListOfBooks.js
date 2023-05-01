import { mainContainer } from './DOMLoader.js';

const listOfBooks = (bookStore) => {
  bookStore.getData();
  mainContainer.innerHTML = `
        <div>
            <h1 class="text-center">All Awesome Books</h1>
            <ul class="books w-50 mx-auto list-unstyled my-5 list-group border-3 border-dark"></ul>
        </div>`;
  const booksContainer = document.querySelector('.books');
  booksContainer.innerHTML = bookStore.render();
};

export default listOfBooks;
