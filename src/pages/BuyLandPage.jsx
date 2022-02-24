import React from 'react';

import BuyLandContextProvider from 'contexts/BuyLandContext';
import BuyLand from '../components/BuyLand/BuyLand'
import BuyLandBuyModal from '../components/BuyLand/BuyLandBuyModal'
import BuyLandSellTransferModal from '../components/BuyLand/BuyLandSellTransferModal';

const BuyLandPage = props => {
  return (
    <BuyLandContextProvider>
      <BuyLand/>
      <BuyLandBuyModal/>
      <BuyLandSellTransferModal/>
    </BuyLandContextProvider>
  )
};

export default BuyLandPage;