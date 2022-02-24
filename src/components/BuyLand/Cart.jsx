import { BuyLandContext } from 'contexts/BuyLandContext';
import React from 'react';

const Cart = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const numOfItems = React.useContext(BuyLandContext).state.numOfItems

  return (
    <div className="col-3 side-bar ps-0" style={{background: 'black'}}>
      <div className="side-bar-header">
        <span className="side-bar-title">Cart:</span>
        <span className="side-bar-num-basket d-inline-block ms-2">{numOfItems}</span>
      </div>
      <div className="side-bar-line mx-4" style={{background: '#3D3D3D'}}></div>
      <div className="side-bar-content">
        <div className="side-bar-content-title">Landplots</div>
        <div className="row flex-wrap side-bar-content-landplots">
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
          <div className="col-4">
            <div className="side-bar-content-landplots-items">
              051297
            </div>
          </div>
      </div>

      <div className="side-bar-line my-4" style={{background: '#3D3D3D'}}></div>

      <div className="side-bar-bottom">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <input className="form-control" placeholder="Enter Coupond Code"/>
          </div>
          <button className="btn-apply background-gradient-green-2">APPLY</button>
        </div>

        <div className="d-flex align-items-center total my-4">
          <small className="d-block">Total</small>
          <div className="ms-auto">
            <span className="land-id-large">150 HBG</span>
            <small className='text-white'>$120 USD</small>
          </div>
        </div>
        <button
          className="btn-buy"
          onClick={()=>dispatch({type: 'SHOW_MODAL_BUY'})}
        >
          BUY
        </button>
      </div>
      </div>
    </div>
  );
};

export default React.memo(Cart)