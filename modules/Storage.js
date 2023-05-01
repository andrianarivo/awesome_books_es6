const getBooks = () => {
  return JSON.parse(localStorage.getItem('books')) || [];
};

const saveBooks = (booksArray) => {
  localStorage.setItem('books', JSON.stringify(booksArray));
};

export { getBooks, saveBooks };
