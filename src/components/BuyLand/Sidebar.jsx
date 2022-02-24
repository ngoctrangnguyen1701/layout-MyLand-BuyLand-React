import React from 'react'
import { BuyLandContext } from 'contexts/BuyLandContext';
import Cart from './Cart';
import CartNoItem from './CartNoItem'

const Sidebar = props => {
  const numOfItems = React.useContext(BuyLandContext).state.numOfItems

  return (
    <>
      {numOfItems > 0 ? <Cart/> : <CartNoItem/>}
    </>
  );
};

export default React.memo(Sidebar);