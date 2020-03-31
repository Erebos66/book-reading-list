import React, { useContext } from 'react';
import styled from 'styled-components';
import { BookContext } from '../contexts/BookContext';


function Status() {
  const { books } = useContext(BookContext);

  return (
    <StatusText>You have currently <span className='items-currently-number'>{books.length || 0}</span> items on your list.</StatusText>
  );
}

export default Status;

const StatusText = styled.h3`
  display: inline-block;
  text-align: center;
  font-weight: normal;
  margin: 0 auto;
  width: 100%;
  color: #A63D40;
  font-size: 1.3rem;

.items-currently-number {
  padding: 0 10px;
  color: #90A959;
  font-weight: bold;
}
`;
