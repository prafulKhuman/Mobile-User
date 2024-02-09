import React, { createContext  } from 'react';
import Header from '../layout/header/Header';
import Footer from "./../layout/footer"

const MyContext = createContext();

const HeaderProvider = ({ children }) => {

  return (
    <MyContext.Provider>
        <Header/>
        {children}
        <Footer/>
    </MyContext.Provider>
  );
};

export { MyContext , HeaderProvider };