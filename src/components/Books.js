import React, { useState } from 'react';
import styles from './Books.module.css';
import AddBook from './AddBook';
import Book from './Book';

function Books() {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Harry Potter',
      author: 'JK ROWLING',
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.bookList}>
        <ul className={styles.item}>
          {books && books.map((book) => <Book key={book.id} book={book} />)}
        </ul>
      </div>
      <AddBook />
    </div>
  );
}

export default Books;
