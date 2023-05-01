import addNewBook from './modules/AddNewBook.js';
import BookStore from './modules/BookStore.js';
import showContact from './modules/Contact.js';
import { mainContainer, navLinks, timeContainer } from './modules/DOMLoader.js';
import listOfBooks from './modules/ListOfBooks.js';
import listenOnRemoveBook from './modules/RemoveBooks.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

timeContainer.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

const bookStore = new BookStore();

listOfBooks(bookStore);

listenOnRemoveBook(bookStore);

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('text-primary');
    });
    e.target.classList.add('text-primary');
    mainContainer.innerHTML = '';

    switch (e.target.id) {
      case 'list':
        listOfBooks(bookStore);
        break;
      case 'add-new':
        addNewBook(bookStore);
        break;
      case 'contact':
        showContact(bookStore);
        break;
      default:
        listOfBooks(bookStore);
        break;
    }
  });
});
