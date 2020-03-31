import React, {
  createContext, useEffect, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);


  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

BookContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default BookContextProvider;
