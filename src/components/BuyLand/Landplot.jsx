import React from 'react';
import styled from 'styled-components';
import { BuyLandContext } from 'src/contexts/BuyLandContext';
import BtnEffectBorderRun from 'src/components/BtnEffectBorderRun'

const LandRightBottom = styled.div`
  max-height: 400px;
  overflow: auto;
  img{
    width: 100%
  }

  @media(min-width: 1200px){
    max-height: 600px;
  }
`

const Landplot = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const typeLandplot = React.useContext(BuyLandContext).state.typeLandplot
  

  return (
    <div className="land d-flex flex-wrap align-items-center m-auto w-100">
      <div className="col-12 col-xl-6 d-flex h-100 mt-4 mt-xl-0">
        <div className="land-left d-flex flex-wrap align-items-center my-auto w-100 mx-lg-4 justify-content-center justify-content-lg-left">
          <img 
            src='images/icon-close.png'
            className='land-left-close'
            onClick={()=>dispatch({type: 'EXIT_LANDPLOT'})}
          />
          <div className="land-left-img me-4"></div>
          <div className='flex-grow-1 mt-4 mt-lg-0'>
            <p className="landplot mb-0">LANDPLOT</p>
            <span className="land-id-large">#051297</span>
            <div className="land-id-small">No. 051297</div>
            <div className="d-flex status-and-price">
              <label>Status</label>
              {typeLandplot !== 'solid' ? <span>Available</span> : <span style={{color: '#FF4200', fontSize: '16px'}}>SOILD</span>}
            </div>
            <div className="d-flex status-and-price">
              <label>Price</label>
              <span>125 HBG</span>
            </div>
            {typeLandplot === 'addToCart' && 
              <BtnEffectBorderRun
                width='130px'
                height='30px'
                backgroundImage='linear-gradient(to bottom, #0A2600, #0A5100)'
                border='1px solid #00FF00'
                fontSize='12px'
                textShadow='2px 2px 15px rgba(0, 255, 0, 0.8)'
                backgroundImageTextHover='linear-gradient(to bottom, #0A2600, #0A5100)'
                widthCricle={`${130 * 1.2}px`}
                positionCircleLeft='-15px'
                positionCircleTop='-63px'
                text='ADD TO CART'
                handleClick={()=>dispatch({type: 'ADD_TO_CART'})}
                isBtnAddToCart={true}
              />
            }

            {typeLandplot === 'soild' && 
              <>
                <span className="land-id-large d-block mt-4" style={{fontSize: '13px', fontFamily: 'Progress_Bold_Italic'}}>OWNER</span>
                <span className="owner-id">0x69041AFcFCF55E666B93D</span>
              </>
            }

            {typeLandplot === 'remove' && <button className="btn-remove">REMOVE</button>}

            {typeLandplot === 'sellAndTransfer' &&
              <div className="d-flex">
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
                  handleClick={()=>dispatch({type: 'SHOW_MODAL_SELL'})}
                />
                <div className='ms-3'>
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
                    handleClick={()=>dispatch({type: 'SHOW_MODAL_TRANSFER'})}
                  />                  
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="col-11 col-md-4 mx-auto mx-xl-0 col-xl-6 land-right pe-xl-4 mt-3 mt-xl-0 mb-3 mb-xl-0">
        <div className="land-right-top d-flex align-items-center p-3 background-gradient-green-2">
          <div className="col-6">
            <span className="land-id-large">#51g</span>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <BtnEffectBorderRun
              width='130px'
              height='30px'
              backgroundImage='linear-gradient(to bottom, #0A2600, #0A5100)'
              border='1px solid #00FF00'
              fontSize='12px'
              textShadow='2px 2px 15px rgba(0, 255, 0, 0.8)'
              backgroundImageTextHover='linear-gradient(to bottom, #0A2600, #0A5100)'
              widthCricle={`${130 * 1.2}px`}
              positionCircleLeft='-15px'
              positionCircleTop='-63px'
              text='ADD TO CART'
              handleClick={()=>dispatch({type: 'ADD_TO_CART'})}
              isBtnAddToCart={true}
            />
          </div>
        </div>  
        <LandRightBottom>
          <img src="images/bg-land-right-01.jpg"/>
        </LandRightBottom>
      </div>
    </div>
  );
};

export default React.memo(Landplot);