import { BuyLandContext } from 'contexts/BuyLandContext';
import React from 'react';

import {
  Sidebar,
  SidebarHeader,
  SidebarNumBasket,
  SidebarLine,
  SidebarContent,
  SidebarLandplots,
  SidebarLandplotsItem,
  InputCoupond,
  BtnApply,
  Total,
  BtnBuy,
} from './styles/SidebarStyle'

const Cart = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const numOfItems = React.useContext(BuyLandContext).state.numOfItems

  return (
    <Sidebar
      className="col-3 ps-0" 
      backgroundColor='black'
    >
      <SidebarHeader>
        <span>Cart:</span>
        <SidebarNumBasket>{numOfItems}</SidebarNumBasket>
      </SidebarHeader>
      <SidebarLine
        className='mx-4'
        backgroundColor='#3D3D3D'
      />
      <SidebarContent>
        <div className="title">Landplots</div>
        <SidebarLandplots>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
          <div className="col-4">
            <SidebarLandplotsItem>051297</SidebarLandplotsItem>
          </div>
      </SidebarLandplots>

      <SidebarLine
        className='my-4'
        backgroundColor='#3D3D3D'
      />

      <div>
        <div className="d-flex align-items-center">
          <InputCoupond className="form-control" placeholder="Enter Coupond Code"/>
          <BtnApply>APPLY</BtnApply>
        </div>

        <Total>
          <small className="d-block">Total</small>
          <div className="ms-auto">
            <span className="land-id-large">150 HBG</span>
            <small className='text-white'>$120 USD</small>
          </div>
        </Total>
        <BtnBuy>BUY</BtnBuy>
      </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default React.memo(Cart)