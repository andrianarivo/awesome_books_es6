// REMOVE A BOOK
const listenOnRemoveBook = (bookStore) => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      bookStore.remove(e.target.id);
      const booksContainer = document.querySelector('.books');
      booksContainer.innerHTML = bookStore.render();
      if (bookStore.empty()) {
        booksContainer.classList.remove('border');
      }
    }
  });
};

export default listenOnRemoveBook;
