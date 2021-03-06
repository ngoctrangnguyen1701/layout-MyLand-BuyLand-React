import React from 'react';
import TextBorderShadow from '../TextBorderShadow';
import {
  HBG,
  BtnCancel,
  IconHouse,
} from './styles/MyLandDetailNoStlye'
import BtnEffectBorderRun from '../BtnEffectBorderRun';
import styled from 'styled-components';

const BtnSellAndTransfer = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
  @media(max-width: 767px){
    margin: 10px 0;
  }
`

const MyLandDetailNo = ({isHasHero, isMobile}) => {

  return (
    <>
      <div className="d-flex align-item-center flex-wrap" style={{marginTop: '-25px'}}>
        <div className='flex-grow-1 d-flex align-items-center'>
          <TextBorderShadow
            text='No. 051297'
            // fontSize='53px'
            fontSize={isMobile ? '40px' : '53px'}
          />
          <IconHouse src='images/icon-house.png'/>
        </div>
        <div className="d-flex align-items-center">
          {isHasHero ? (
            <BtnSellAndTransfer>
              <BtnEffectBorderRun
                width='75px'
                height='39px'
                backgroundImage='linear-gradient(to right, #DD0000, #790000)'
                border='1px solid #E50303'
                fontSize='18px'
                textShadow='2px 2px 15px rgba(221, 0, 0, 0.8)'
                backgroundImageTextHover='linear-gradient(to right, #DD0000, #790000)'
                widthCricle={`${75 * 1.2}px`}
                positionCircleLeft='-8px'
                positionCircleTop='-26px'
                text='SELL'
              />
              <div className='d-inline-block ms-2'>
                <BtnEffectBorderRun
                  width='117px'
                  height='39px'
                  backgroundImage='linear-gradient(to bottom, #0A5100, #0A2600)'
                  border='1px solid #00FF00'
                  fontSize='18px'
                  textShadow='2px 2px 15px rgba(0, 255, 0, 0.8)'
                  backgroundImageTextHover='linear-gradient(to bottom, #0A5100, #0A2600)'
                  widthCricle={`${117 * 1.2}px`}
                  positionCircleLeft='-13px'
                  positionCircleTop='-50px'
                  text='TRANSFER'
                />
              </div>
            </BtnSellAndTransfer>
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