import React from 'react';
import TextBorderShadow from '../TextBorderShadow';
import {
  HBG,
  BtnCancel,
  IconHouse,
} from './styles/MyLandDetailNoStlye'

const MyLandDetailNo = ({isHasHero}) => {
  return (
    <>
      <div className="d-flex align-item-center" style={{marginTop: '-25px'}}>
        <div className='flex-grow-1 d-flex align-items-center'>
          <TextBorderShadow
            text='No. 051297'
            fontSize='53px'
          />
          <IconHouse src='images/icon-house.png'/>
        </div>
        <div className="d-flex align-items-center">
          {isHasHero ? (
            <div className="content-right-sell-and-transfer my-auto">
              <button className="btn-sell">SELL</button>
              <button className="btn-transfer">TRANSFER</button>
            </div>
          ) : (
            <div className='d-flex'>
              <HBG>HBG</HBG>
              <BtnCancel>CANCEL</BtnCancel>
            </div>
          )}
          
        </div>
      </div>
      <p className="content-right-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>  
    </>
  );
};

export default React.memo(MyLandDetailNo);