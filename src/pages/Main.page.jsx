import React, { useContext } from 'react';
import styled from 'styled-components';
import '../App.css';
import BookList from '../components/BookList';
import Status from '../components/Status';
import AddModal from '../components/AddModal';
import { AppContext } from '../contexts/AppContext';


function App() {
  const { isModalOpen } = useContext(AppContext);

  return (
    <Wrapper>
      {isModalOpen && <AddModal />}
      <h1>Reading List</h1>
      <Status />
      <BookList />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 80px;
  width: 600px;
  margin: 0 auto;
  position: relative;

  h1 {
    text-align: center;
    font-size: 3.5rem;
  }
`;
