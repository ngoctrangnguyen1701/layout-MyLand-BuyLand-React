import React from 'react';
import { MyLandDetailContext } from 'src/contexts/MyLandDetailContext';

import {
  Modal,
  ModalFrame,
  ModalHeader,
  ModalContent,
  ModalBtn,
} from './styles/StopMinningModalStyle'

const StopMinningModal = props => {
  console.log('render StopMinningModal');
  const dispatch = React.useContext(MyLandDetailContext).dispatch
  const showModalStopMinning = React.useContext(MyLandDetailContext).state.showModalStopMinning


  React.useEffect(()=>{
    //chặn thanh cuộn dọc của thẻ <body> khi bật modal change hero
    const bodyElement = document.getElementsByTagName('body')[0]
    console.log(bodyElement);
    if(showModalStopMinning){
      bodyElement.style.overflow = 'hidden'
      bodyElement.style.height = '100%'
    }
    else{
      bodyElement.style.overflow = 'auto'
      bodyElement.style.height = 'auto'
    }
  }, [showModalStopMinning])

  return (
    <Modal
      onClick={()=>dispatch({type: 'EXIT_MODAL_STOP_MINNING'})}  //--> xử lý click outside
      show={showModalStopMinning}
    >
      <ModalFrame
        show={showModalStopMinning}
        onClick={e=>{e.stopPropagation()}} //--> xử lý click outside
      >
        <ModalHeader>NOTIFICATION</ModalHeader>
        <ModalContent className="modal-land-content">
            <p className="px-5 mt-5">
              Bạn có chắc muốn ngừng minning?
            </p>
          <div className="row mt-5">
            <div className="col-6">
              <ModalBtn
                onClick={()=>dispatch({type: 'EXIT_MODAL_STOP_MINNING'})}
              >
                <div className="circle-white"></div>
                <div className="text">
                  YES
                </div>
              </ModalBtn>
            </div>
            <div className="col-6">
              <ModalBtn
                onClick={()=>dispatch({type: 'EXIT_MODAL_STOP_MINNING'})}
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

export default React.memo(StopMinningModal);