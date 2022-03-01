import React from 'react';

import BuyLandContextProvider from 'src/contexts/BuyLandContext';
import BuyLand from '../components/BuyLand/BuyLand'
import BuyLandBuyModal from '../components/BuyLand/BuyLandBuyModal'
import BuyLandSellTransferModal from '../components/BuyLand/BuyLandSellTransferModal';
import { NavBarMobileContext } from 'src/contexts/NavBarMobileContext';


const BuyLandPage = props => {
  const {showMenuCollapse, setShowMenuCollapse} = React.useContext(NavBarMobileContext)

  React.useEffect(()=>{
    //khi component này render ra, menu collapse sẽ tắt đi
    if(showMenuCollapse) {
      console.log('buy land page', showMenuCollapse);
      setShowMenuCollapse(false)
    }
  }, [])

  return (
    <BuyLandContextProvider>
      <BuyLand/>
      <BuyLandBuyModal/>
      <BuyLandSellTransferModal/>
    </BuyLandContextProvider>
  )
};

export default BuyLandPage;