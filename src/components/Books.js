import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Books.module.css';
import AddBook from './AddBook';
import Book from './Book';
import { getBooks } from '../redux/books/books';

function Books() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.bookList}>
        <ul className={styles.item}>
          {books?.map((book) => <Book key={book.id} book={book} />)}
        </ul>
      </div>
      <AddBook />
    </div>
  );
}

export default Books;
