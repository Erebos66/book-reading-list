import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdAddCircle } from 'react-icons/md';
import { BookContext } from '../contexts/BookContext';
import { AppContext } from '../contexts/AppContext';
import BookSingle from './BookSingle';

function BookList() {
  const { books } = useContext(BookContext);
  const { toggleModal } = useContext(AppContext);

  return (
    <Wrapper>
      <span className='add-icon' onClick={toggleModal}><MdAddCircle /></span>
      { books.length ? (
        <div className='list'>
          <ul>
            {
            books.map((book) => <BookSingle book={book} />)
          }
          </ul>
        </div>
      )
        : <h3 className='reading-status'>Your list is empty, take a break</h3>}
    </Wrapper>
  );
}

export default BookList;

const Wrapper = styled.div`
  background-color: #E9B872;
  margin-top: 50px;
  padding: 20px;
  color: #151515;
  border-radius: 4px 15px 4px 15px;
  box-shadow: 0 0 12px 0px #ffffff6b;
  position: relative;

  .add-icon {
    position: absolute;
    font-size: 65px;
    right: -15px;
    top: -15px;
    color: #A63D40;
    transition: 0.2s;

    &:hover {
      transform: scale(0.9);
      cursor: pointer;
      color: #90A959;
    }
  }

  .reading-status {
    font-size: 1.5rem;
    text-align: center;
  }

  .list {
    width: 90%;
    margin: 0 auto;

    ul {
      list-style-type: none;
      padding: 0;
    }
  }
  `;
