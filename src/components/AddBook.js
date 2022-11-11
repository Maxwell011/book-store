import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './AddBook.module.css';
import { addBook } from '../redux/books/books';

function AddBook() {
  let title = '';
  let category = '';
  let author = '';
  const dispatch = useDispatch();
  const clearInput = () => {
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    title.value = '';
    author.value = '';
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: String(`${Date.now()}`),
        title,
        author,
        category,
      }),
    );
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
    clearInput();
  };

  return (
    <div className={styles.container}>
      <p className={styles.miniheader}>Add New Book</p>
      <form className={styles.form}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Book Title"
          className={styles.inputTitle}
        />
        <input
          type="text"
          name="category"
          onChange={handleChange}
          placeholder="Category"
          className={styles.inputCategory}
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
