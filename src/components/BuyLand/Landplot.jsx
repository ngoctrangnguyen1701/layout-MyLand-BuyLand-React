import React from 'react';
import styled from 'styled-components';
import { BuyLandContext } from 'src/contexts/BuyLandContext';
import BtnEffectBorderRun from 'src/components/BtnEffectBorderRun'

const IconCart = styled.img`
  display: inline-block;
  width: 15%;
  margin-right: 5px;
  margin-top: -5px;
`

const Landplot = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const typeLandplot = React.useContext(BuyLandContext).state.typeLandplot
  

  return (
    <div className="land d-flex align-items-center m-auto w-100">
      <div className="col-6 d-flex h-100">
        <div className="land-left d-flex align-items-center my-auto w-100 mx-4">
          <img 
            src='images/icon-close.png'
            className='land-left-close'
            onClick={()=>dispatch({type: 'EXIT_LANDPLOT'})}
          />
          <img src="images/arrow.png" className="land-left-arrow"/>
          <div className="land-left-img"></div>
          <div className="land-left-info ps-4 flex-grow-1">
            <p className="landplot mb-0">LANDPLOT</p>
            <span className="land-id-large">#051297</span>
            <div className="land-id-small">No. 051297</div>
            <div className="d-flex status-and-price">
              <label>Status</label>
              {/* CHANGE LANDPLOT IS HERE  */}
              {typeLandplot !== 'solid' ? <span>Available</span> : <span style={{color: '#FF4200', fontSize: '16px'}}>SOILD</span>}
            </div>
            <div className="d-flex status-and-price">
              <label>Price</label>
              <span>125 HBG</span>
            </div>
            {/* CHANGE LANDPLOT IS HERE  */}
            {typeLandplot === 'addToCart' && 
              <button
                className="btn-add-to-cart background-gradient-green-2"
                onClick={()=>dispatch({type: 'ADD_TO_CART'})}
              >
                <IconCart src="images/icon-cart-green.png"/>
                ADD TO CART
              </button>
            }

            {typeLandplot === 'soild' && 
              <>
                <span className="land-id-large d-block mt-4" style={{fontSize: '13px', fontFamily: 'Progress_Bold_Italic'}}>OWNER</span>
                <span className="owner-id">0x69041AFcFCF55E666B93D</span>
              </>
            }

            {typeLandplot === 'remove' && <button className="btn-remove">REMOVE</button>}

            {typeLandplot === 'sellAndTransfer' &&
              // <div className="d-flex">
              //   <button
              //     className="btn-sell"
              //     onClick={()=>dispatch({type: 'SHOW_MODAL_SELL'})}
              //   >SELL</button>
              //   <button
              //     className="btn-transfer"
              //     onClick={()=>dispatch({type: 'SHOW_MODAL_TRANSFER'})}
              //   >TRANSFER</button>
              // </div>
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
                  />                  
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="col-6 land-right pe-4">
        <div className="land-right-top d-flex align-items-center p-3 background-gradient-green-2">
          <div className="col-6">
            <span className="land-id-large">#51g</span>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              className="btn-add-to-cart background-gradient-green-2"
              onClick={()=>dispatch({type: 'ADD_TO_CART'})}
            >
              <IconCart src="images/icon-cart-green.png"/>
              ADD TO CART
            </button>
          </div>
        </div>  
        <div className="land-right-bottom">
        </div>
      </div>
    </div>
  );
};

export default React.memo(Landplot);