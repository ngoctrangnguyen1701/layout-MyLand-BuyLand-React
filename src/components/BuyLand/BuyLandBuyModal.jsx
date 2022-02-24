import React from 'react';
import { BuyLandContext } from 'contexts/BuyLandContext';

const BuyLandBuyModal = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const showModalBuy = React.useContext(BuyLandContext).state.showModalBuy

  return (
    <section id="modal-land" style={{display: showModalBuy ? 'flex' : 'none'}}>
      <div className="modal-land box pb-4">
        <div className="modal-land-header">NOTIFICATION</div>
        <div className="modal-land-content">
          <div className="modal-land-content-text mt-5">
            <p className="px-5">
              Bạn có chắc muốn mua <span>#051297</span>, <br/>
                <span>#0512976</span>?
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <button
                className="modal-land-btn"
                onClick={()=>dispatch({type: 'EXIT_MODAL_BUY'})}
              >
                <div className="circle-white"></div>
                <div className="text">
                  YES
                </div>
              </button>
            </div>
            <div className="col-6">
              <button 
                className="modal-land-btn"
                onClick={()=>dispatch({type: 'EXIT_MODAL_BUY'})}
              >
                <div className="circle-white"></div>
                <div className="text">
                  NO
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BuyLandBuyModal);