import React from 'react';
import { BuyLandContext } from 'contexts/BuyLandContext';

import {
  Modal,
  ModalFrame,
  ModalHeader,
  ModalContent,
  ModalBtn,
} from './styles/BuyLandModalStyle'

const BuyLandBuyModal = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const showModalBuy = React.useContext(BuyLandContext).state.showModalBuy

  return (
    <Modal
      onClick={()=>dispatch({type: 'EXIT_MODAL_BUY'})}  //--> xử lý click outside
      show={showModalBuy}
    >
      <ModalFrame
        show={showModalBuy}
        onClick={e=>{e.stopPropagation()}} //--> xử lý click outside
      >
        <ModalHeader>NOTIFICATION</ModalHeader>
        <ModalContent className="modal-land-content">
            <p className="px-5 mt-5">
              Bạn có chắc muốn mua <span>#051297</span>, <br/>
                <span>#0512976</span>?
            </p>
          <div className="row mt-5">
            <div className="col-6">
              <ModalBtn
                onClick={()=>dispatch({type: 'EXIT_MODAL_BUY'})}
              >
                <div className="circle-white"></div>
                <div className="text">
                  YES
                </div>
              </ModalBtn>
            </div>
            <div className="col-6">
              <ModalBtn
                onClick={()=>dispatch({type: 'EXIT_MODAL_BUY'})}
              >
                <div className="circle-white"></div>
                <div className="text">
                  NO
                </div>
              </ModalBtn>
            </div>
          </div>
        </ModalContent>
      </ModalFrame>
    </Modal>
  );
};

export default React.memo(BuyLandBuyModal);