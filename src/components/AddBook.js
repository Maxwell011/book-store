import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './AddBook.module.css';
import { addBook } from '../redux/books/books';

function AddBook() {
  let title = '';
  let category = '';
  let author = '';
  const dispatch = useDispatch();
  const clearAll = () => {
    setTimeout(() => {
      title = '';
      category = '';
      author = '';
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: String(`${Date.now()}`), title, author, category,
      }),
    );
    clearAll();
  };

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      title = e.target.value;
    }
    if (e.target.name === 'author') {
      author = e.target.value;
    }
    if (e.target.name === 'category') {
      category = e.target.value;
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
        <input
          type="text"
          name="category"
          onChange={handleChange}
          placeholder="category"
          className={styles.input}
        />
        <button
          type="submit"
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
