function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return result;
}

function numberOfBorrows(account, books) {
  const result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) {
        acc++;
      }
    }
    return acc;
  }, 0)
  return result;
}

function getAuthorById(authors, authorId) { return authors.find(author => author.id === authorId); }

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const match = book.borrows.filter((borrow) => borrow.id === account.id && borrow.returned === false);
    if (match.length > 0) {
      const bookResult = book;
      bookResult['author'] = getAuthorById(authors, book.authorId)
      result.push(bookResult);
    }
  }
  return result;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
