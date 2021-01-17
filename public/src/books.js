function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  result[0] = borrowed;
  result[1] = returned;
  return result;
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map(borrower => {
    const result = accounts.find(account => borrower.id === account.id);
    result.returned = borrower.returned;
    return result;
  });
  result = result.slice(0,10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
