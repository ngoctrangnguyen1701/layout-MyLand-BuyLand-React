import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BtnEffectBorderRun from '../BtnEffectBorderRun';

const Frame = styled.div`
  width: 20% ;
  max-width: 250px;
  display: flex;
  margin: 40px 0;

  @media(max-width: 991px){
    width: 35%;
    margin: 30px 0;
  }
  @media(max-width: 767px){
    width: 100%;
    margin: 15px 0;
  }
`

const LandItem = (props) => {
  const {
    no,
    reward,
    isHBGAndCancel,
  } = props

  return (
    // <div className="d-flex my-5 ps-0" style={{width: '20%'}}>
    <Frame>
      <div className="content-main-box mx-auto">
        <Link to='/my-land/detail'>
          <div className="content-main-box-img"></div>
        </Link>
        <div className="content-main-box-no my-3">
          No. {no}
        </div>
        <div className="content-main-box-reward">
          Reward:
          <span>{reward}</span>
        </div>
        <div className="content-main-box-line my-3">
          <div className="line-percent"></div>
          <span>Minning: 50/100</span>
        </div>
        <div className="d-flex justify-content-between">
          {/* <button className="btn-sell">SELL</button>
          <button className="btn-transfer">TRANSFER</button> */}
          {isHBGAndCancel ? (
            <>
              <BtnEffectBorderRun
                width='64px'
                height='30px'
                backgroundImage='linear-gradient(10deg, #00B1FF, #00FFA9)'
                border='1px solid #00B1FF'
                fontSize='12px'
                textShadow='2px 2px 15px rgba(0, 177, 255, 0.8)'
                backgroundImageTextHover='linear-gradient(10deg, #00B1FF, #00FFA9)'
                widthCricle={`${64 * 1.2}px`}
                positionCircleLeft='-8px'
                positionCircleTop='-25px'
                text='HBG'
              />
              <BtnEffectBorderRun
                width='92px'
                height='30px'
                backgroundImage='linear-gradient(to bottom, #0A5100, #0A2600)'
                border='1px solid #00FF00'
                fontSize='12px'
                textShadow='2px 2px 15px rgba(0, 255, 0, 0.8)'
                backgroundImageTextHover='linear-gradient(to bottom, #0A5100, #0A2600)'
                widthCricle={`${92 * 1.2}px`}
                positionCircleLeft='-8px'
                positionCircleTop='-42px'
                text='CANCEL'
              />
            </>
          ) : (
            <>
              <BtnEffectBorderRun
                width='64px'
                height='30px'
                backgroundImage='linear-gradient(to right, #DD0000, #790000)'
                border='1px solid #E50303'
                fontSize='12px'
                textShadow='2px 2px 15px rgba(221, 0, 0, 0.8)'
                backgroundImageTextHover='linear-gradient(to right, #DD0000, #790000)'
                widthCricle={`${64 * 1.2}px`}
                positionCircleLeft='-8px'
                positionCircleTop='-25px'
                text='SELL'
              />
              <BtnEffectBorderRun
                width='92px'
                height='30px'
                backgroundImage='linear-gradient(to bottom, #0A5100, #0A2600)'
                border='1px solid #00FF00'
                fontSize='12px'
                textShadow='2px 2px 15px rgba(0, 255, 0, 0.8)'
                backgroundImageTextHover='linear-gradient(to bottom, #0A5100, #0A2600)'
                widthCricle={`${92 * 1.2}px`}
                positionCircleLeft='-8px'
                positionCircleTop='-42px'
                text='TRANSFER'
              />
            </>
          )}
        </div>
      </div>
    </Frame>
  );
};

export default React.memo(LandItem);