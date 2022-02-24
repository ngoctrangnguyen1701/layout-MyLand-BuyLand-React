import React from 'react';
import { BuyLandContext } from 'contexts/BuyLandContext';

const BuyLandSellTransferModal = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const showModalSell = React.useContext(BuyLandContext).state.showModalSell
  const showModalTransfer = React.useContext(BuyLandContext).state.showModalTransfer
  const show = showModalSell ||  showModalTransfer

  const onClose = () => {
    dispatch({type: 'EXIT_MODAL_SELL'})
    dispatch({type: 'EXIT_MODAL_TRANSFER'})
  }

  return (
    <section id="modal-land" style={{display: show ? 'flex' : 'none'}}>
      <div className="modal-land box pb-5">
        <div className="modal-land-header">SELL</div>
        <div className="modal-land-content">
          <div className="px-5 d-flex mt-5">
            <input className="form-control flex-grow-1 modal-land-input" placeholder="Price"/>
            <div className="modal-land-hbg">HBG</div>
          </div>

          <div className="px-5 mt-5 d-flex align-items-center">
            <div className="modal-land-img"></div>
            <div className="flex-grow-1 ms-4">
              <div className="no-and-reward">
                <label>No</label>
                <span>051297</span>
              </div>
              <div className="no-and-reward">
                <label>Reward</label>
                <span>534 HBG</span>
              </div>
              <div className="modal-land-line mt-5">
                <div className="line-percent"></div>
                <span>Minning: 50/100</span>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <button
                className="modal-land-btn"
                onClick={onClose}
              >
                <div className="circle-white"></div>
                <div className="text">
                  CONFIRM
                </div>
              </button>
            </div>
            <div className="col-6">
              <button
                className="modal-land-btn"
                onClick={onClose}
              >
                <div className="circle-white"></div>
                <div className="text">
                  CANCEL
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BuyLandSellTransferModal);