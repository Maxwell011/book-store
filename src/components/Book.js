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
    <div className="single-book">
      <div className="singlecontaniner">
        <h2 className="category">{category}</h2>
        <h2 className="title-heading">{title}</h2>
        <h2 className="author">{author}</h2>
        <button type="button" className="button" id={id} onClick={handleDelete}>
          Remove
        </button>
      </div>
      <div>
        <p className="progress-percent">64%</p>
        <p className="progress-complete">Completed</p>
      </div>
      <div className="hr" />
      <div className="card-3">
        <p style={{ opacity: 0.5, fontSize: '13px' }}>CURRENT CHAPTER</p>
        <p className="chapter">CHAPTER 17</p>
        <button className="update" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default Book;
