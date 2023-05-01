import BookStore from './modules/BookStore.js';
import { mainContainer, navLinks } from './modules/DOMLoader.js';

const bookStore = new BookStore();

const listOfBooks = () => {
  bookStore.getData();
  mainContainer.innerHTML = `
        <div>
            <h1 class="text-center">All Awesome Books</h1>
            <ul class="books w-50 mx-auto list-unstyled my-5 list-group border-3 border-dark"></ul>
        </div>`;
  const booksContainer = document.querySelector('.books');
  booksContainer.innerHTML = bookStore.render();
};

listOfBooks();

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('text-primary');
    });
    e.target.classList.add('text-primary');
    mainContainer.innerHTML = '';
    const addBtn = document.querySelector('#addBtn');
    switch (e.target.id) {
      case 'list':
        listOfBooks();
        break;
      case 'add-new':
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
        addBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const titleInput = document.querySelector('#titleInput');
          const authorInput = document.querySelector('#authorInput');
          const titleValue = titleInput.value;
          const authorValue = authorInput.value;
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
          bookStore.addBook(titleInput.value, authorInput.value);
          bookStore.saveData();
          titleInput.value = '';
          authorInput.value = '';
        });
        break;
      case 'contact':
        mainContainer.innerHTML = `
        <section class="d-flex flex-column justify-content-center align-items-center">
            <h2 class='text-center'>Contact Information</h2>
            <p>
                Do you have any questions od you just want to say "Hello"?<br>
                You can reach out to us!
            </p>
            <ul>
                <li>Our email: mail@mail.com</li>
                <li>Our phone number: 0042386534422</li>
                <li>Our address: street name 22, 84503, city, country</li>
            </ul>
        </section>
        `;
        break;
      default:
        listOfBooks();
        break;
    }
  });
});
