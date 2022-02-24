import React from 'react';

import BuyLandContextProvider from 'contexts/BuyLandContext';
import BuyLand from '../components/BuyLand/BuyLand';

const BuyLandPage = props => {
  return (
    <BuyLandContextProvider>
      <BuyLand/>
    </BuyLandContextProvider>
  )
};

export default BuyLandPage;