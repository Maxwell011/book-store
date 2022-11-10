import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
