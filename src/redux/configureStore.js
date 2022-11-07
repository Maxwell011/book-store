import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer,
  },
});

export default rootReducer;
