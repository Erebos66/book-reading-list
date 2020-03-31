import React, { useContext, useState, useRef } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { AppContext } from '../contexts/AppContext';
import { BookContext } from '../contexts/BookContext';
import { useLockBg } from '../hooks/useLockBg';
import { useClickOutsideDiv } from '../hooks/useClickOutsideDiv';


function AddModal() {
  const { isModalOpen, toggleModal } = useContext(AppContext);
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const ref = useRef();
  useLockBg();
  useClickOutsideDiv(ref, toggleModal);


  return (
    <div ref={ref}>
      {isModalOpen && (
      <Modal>
        <h2>Add to list</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: 'addBook',
            payload: {
              id: uuid(), title, author, category,
            },
          });
          toggleModal();
          setTitle('');
          setAuthor('');
          setCategory('');
        }}
        >
          <label>Title</label>
          <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title ...' required />
          <label>Author/Publisher</label>
          <input type='text' name='author-publisher' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author ...' required />
          <label>Category</label>
          <input type='text' name='category' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Magazine ...' required />
          <button type='submit'>Add</button>
        </form>
      </Modal>
      )}
    </div>
  );
}

export default AddModal;

const Modal = styled.div`
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%,0%);
  z-index: 2;
  background-color: #151515;
  border: 4px solid #A63D40;
  border-radius: 10px;
  width: 400px;
  height: 400px;

  h2 {
    text-align: center;
    color: #90A959;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      font-size: 1.2rem;
    }
    
    > label, input {
        margin: 5px 0;
        width: 90%;
        text-align: center;
        border: 0;
    }

    input {
      padding: 10px 0;
      border-radius: 2px;
      border: 0;
      transition: 0.3s ease-in-out;
      width: 60%;

      &:focus {
        outline: 0;
        transform: scale(1.05);
        width: 70%;
      }
    }

    button {
      position: absolute;
      bottom: 0px;
      width: 100%;
      background-color: #A63D40;
      border: 0;
      color: #fff;
      padding: 20px 0;
      border-radius: 0 0 5px 5px;
      font-size: 1.5rem;

      &:hover {
        cursor:pointer;
      }

      &:focus {
        outline: 0;

      }
    }
  }
`;
