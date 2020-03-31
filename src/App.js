import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import AppContextProvider from './contexts/AppContext';
import MainPage from './pages/Main.page';


function App() {
  return (
    <div>
      <AppContextProvider>
        <BookContextProvider>
          <MainPage />
        </BookContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
