/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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

  const percentage = 50;

  return (
    <div className="card">
      <div className="single-card">
        <h2 className="category">{category}</h2>
        <h2 className="title-heading">{title}</h2>
        <h2 className="author">{author}</h2>
        <div className="functions">
          <p className="adds">Comments</p>
          <hr />
          <button
            type="button"
            className="button"
            id={id}
            onClick={handleDelete}
          >
            Remove
          </button>
          <hr />
          <p className="adds">Edit</p>
        </div>
      </div>
      <div className="progressBarWrapper">
        <div style={{ width: 70, height: 70, color: '#0290ff' }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
            className="progress-bar"
          />
        </div>
        <div className="percent-div">
          <p className="progress-percent">50%</p>
          <p className="progress-complete">Completed</p>
        </div>
      </div>
      <div className="hr" />
      <div className="card-3">
        <p style={{ opacity: 0.5, fontSize: '13px', padding: '5px' }}>
          CURRENT CHAPTER
        </p>
        <p className="chapter">CHAPTER 1</p>
        <button className="update" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default Book;
