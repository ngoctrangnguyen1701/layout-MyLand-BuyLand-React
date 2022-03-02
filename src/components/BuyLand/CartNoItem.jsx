import React from 'react';

import {
  Sidebar,
  SidebarHeader,
  SidebarNumBasket,
  SidebarLine,
  SidebarContent,
  EmptyCart,
} from './styles/SidebarStyle'

const CartNoItem = props => {
  return (
    // <Sidebar className="col-xl-3 ps-lg-0">
    <Sidebar>
      <SidebarHeader>
        <span>Cart:</span>
        <SidebarNumBasket>0</SidebarNumBasket>
      </SidebarHeader>
      <SidebarLine className="px-0"></SidebarLine>
      <SidebarContent>
        <EmptyCart>
          <div className="d-flex align-items-end">
            <img src="images/icon-global.png"/>
            <span>YOUR CART IS EMPTY</span>
          </div>
          <p className="tutorial">Select landplot on the map.</p>
        </EmptyCart>
      </SidebarContent>
    </Sidebar>
  );
};

export default React.memo(CartNoItem);