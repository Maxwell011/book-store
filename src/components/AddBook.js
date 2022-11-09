import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './AddBook.module.css';
import { addBook } from '../redux/books/books';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    id: `${Date.now()}`,
  });
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
  };

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setBook({ title: e.target.value, author: book.author });
    }
    if (e.target.name === 'author') {
      setBook({ title: book.title, author: e.target.value });
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.miniheader}>Add New Book</p>
      <form className={styles.formContainer}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title of the book"
          className={styles.input}
        />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          placeholder="author name"
          className={styles.input}
        />
        <input type="text" placeholder="category" className={styles.input} />
        <button
          type="button"
          onClick={handleClick}
          value="Add"
          label="Add"
          className={styles.addBtn}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
