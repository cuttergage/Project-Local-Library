function totalBooksCount(books) {
  const result = books.length;
  return result;
}

function totalAccountsCount(accounts) {
  const result = accounts.length;
  return result;
}

function booksBorrowedCount(books) {
  const result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].returned === false) {
        acc++;
      }
    }
    return acc;
  }, 0)
  return result;
}

function getMostCommonGenres(books) {
  const genres = [];
  books.forEach(book => {
    const match = genres.find(genre => genre.name === book.genre);
    if (match) {
      match.count++;
    } else {
      genres.push({ name: book.genre, count: 1 });
    }
  });
  let result = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);
  result = result.slice(0,5);
  return result;
}

function getMostPopularBooks(books) {
  const popularBooks = [];
  books.forEach(book => {
    popularBooks.push({ name: book.title, count: book.borrows.length });
  });
  let result = popularBooks.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
  result = result.slice(0,5);
  return result;
}

function getAuthorById(authors, authorId) { return authors.find(author => author.id === authorId); }

function getMostPopularAuthors(books, authors) {
  const bookAuthors = [];
  books.forEach(book => {
    const match = bookAuthors.find(author => author.id === book.authorId);
    if (match) {
      match.count += book.borrows.length;
    } else {
      const name = getAuthorById(authors, book.authorId);
      bookAuthors.push({
        name: `${name.name.first} ${name.name.last}`,
        count: book.borrows.length });
    }
  });
    let result = bookAuthors.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1);
  result = result.slice(0,5);
  return result;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
