import React from 'react';
import NavBarMain from './components/NavBarMain';
import BuyLandPage from './pages/BuyLandPage';
import './scss/main.scss'
import BuyLandContextProvider from 'contexts/BuyLandContext';

function App() {
  return (
    <>
      <BuyLandContextProvider>
        <NavBarMain/>
        <BuyLandPage/>
      </BuyLandContextProvider>
    </>
  );
}

export default App;
