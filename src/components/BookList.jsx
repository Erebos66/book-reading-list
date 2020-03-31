import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdAddCircle } from 'react-icons/md';
import { BookContext } from '../contexts/BookContext';
import { AppContext } from '../contexts/AppContext';

function BookList() {
  const { books, dispatch } = useContext(BookContext);
  const { toggleModal } = useContext(AppContext);

  return (
    <Wrapper>
      <span className='add-icon' onClick={toggleModal}><MdAddCircle /></span>
      { books.length === 0 && <h3 className='reading-status'>Your list is empty, take a break</h3>}
      <div className='list'>
        <ul>
          {
            books.map((book) => <li onClick={() => dispatch({ type: 'removeBook', id: book.id })} key={book.id}><span>{book.title}<small> (by {book.author})</small></span><span>{book.category}</span></li>)
          }
        </ul>
      </div>
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

      li {
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
      }
    }
  }
  `;
