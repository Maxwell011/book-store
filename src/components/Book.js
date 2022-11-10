import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

// eslint-disable-next-line react/prop-types
const Book = ({ book }) => {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    title, author, category, id,
  } = book;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <h2>{title}</h2>
      <h2>{author}</h2>
      <h2>{category}</h2>
      <button type="button" id={id} onClick={handleDelete}>
        Remove
      </button>
    </li>
  );
};

export default Book;
