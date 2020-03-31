import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BookContext } from '../contexts/BookContext';


function BookSingle({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <BookItem onClick={() => dispatch({ type: 'removeBook', id: book.id })} key={book.id}>
      <span>{book.title}<small> (by {book.author})</small></span>
      <span>{book.category}</span>
    </BookItem>
  );
}

BookSingle.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookSingle;

const BookItem = styled.li`
  display: flex;
  background-color: inherit;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  padding: 20px 0;
  transition: .1s;
  cursor: pointer;
  &:not(:last-of-type){
    border-bottom: 1px solid #151515;
  }

  &:hover {
    transform: scale(1.1);
    border-bottom: none;
    text-decoration: line-through;
  }
`;
