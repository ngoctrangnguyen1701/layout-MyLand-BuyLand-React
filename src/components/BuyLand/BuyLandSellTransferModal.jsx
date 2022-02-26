import React from 'react';
import { BuyLandContext } from 'src/contexts/BuyLandContext';

import {
  Modal,
  ModalFrame,
  ModalHeader,
  ModalContent,
  Input,
  HBG,
  ModalImg,
  NoAndReward,
  Progress,
  ModalBtn,
} from './styles/BuyLandModalStyle'

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
    <Modal
      onClick={onClose}  //--> xử lý click outside
      show={show}
    >
      <ModalFrame
        show={show}
        onClick={e=>{e.stopPropagation()}} //--> xử lý click outside
      >
        <ModalHeader>
          {/* CHANGE CODE IS HERE */}
          {showModalSell && 'SELL'}
          {showModalTransfer && 'TRANSFER'}
        </ModalHeader>
        <ModalContent>
            <div className="px-5 d-flex mt-5">
              {/* CHANGE CODE IS HERE */}
              {showModalSell && 
                <>
                  <Input className="form-control flex-grow-1" placeholder="Price"/>
                  <HBG>HBG</HBG>
                </>}
              {showModalTransfer && <Input className="form-control text-center" placeholder="Address"></Input>}
            </div>

          <div className="px-5 mt-5 d-flex align-items-center">
            <ModalImg/>
            <div className="flex-grow-1 ms-4">
              <NoAndReward>
                <label>No</label>
                <span>051297</span>
              </NoAndReward>
              <NoAndReward>
                <label>Reward</label>
                <span>534 HBG</span>
              </NoAndReward>
              <Progress className="mt-5">
                <div className="line-percent"></div>
                <span>Minning: 50/100</span>
              </Progress>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <ModalBtn
                onClick={onClose}
              >
                <div className="circle-white"></div>
                <div className="text">
                  CONFIRM
                </div>
              </ModalBtn>
            </div>
            <div className="col-6">
              <ModalBtn
                onClick={onClose}
              >
                <div className="circle-white"></div>
                <div className="text">
                  CANCEL
                </div>
              </ModalBtn>
            </div>
          </div>
        </ModalContent>
      </ModalFrame>
    </Modal>
  );
};

export default React.memo(BuyLandSellTransferModal);