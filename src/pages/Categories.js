import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCategories(categories));
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="check-btn">
        Check status
      </button>
    </div>
  );
};

export default Categories;
