import React from 'react';
import styled from 'styled-components';
import { BuyLandContext } from 'contexts/BuyLandContext';

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
              <div className="d-flex">
                <button
                  className="btn-sell"
                  onClick={()=>dispatch({type: 'SHOW_MODAL_SELL'})}
                >SELL</button>
                <button
                  className="btn-transfer"
                  onClick={()=>dispatch({type: 'SHOW_MODAL_TRANSFER'})}
                >TRANSFER</button>
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