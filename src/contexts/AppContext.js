import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AppContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AppContextProvider;
