import React from 'react';

// eslint-disable-next-line react/prop-types
const Book = ({ book }) => {
  // eslint-disable-next-line react/prop-types
  const { title, author } = book;

  return (
    <li>
      <h2>{title}</h2>
      <h2>{author}</h2>
    </li>
  );
};

export default Book;
