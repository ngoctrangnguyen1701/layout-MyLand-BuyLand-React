import React from 'react';
import { BuyLandContext } from 'contexts/BuyLandContext';

const BuyLandBuyModal = props => {
  const dispatch = React.useContext(BuyLandContext).dispatch
  const showModalBuy = React.useContext(BuyLandContext).state.showModalBuy
  // const timeRef = React.useRef(0)

  // React.useEffect(()=>{
  //   if(showModalBuy) timeRef.current = 1
  // }, [showModalBuy])

  return (
    <section
      id="modal-land"
      // style={{display: showModalBuy ? 'flex' : 'none'}}
      // style={{zIndex: showModalBuy ? '1000' : '-1000'}}
      className={showModalBuy ? 'show-modal-land modal-land-frame' : 'modal-land-frame'}
      // className={showModalBuy ? 'show-modal-land' : timeRef.current === 1 ? 'hidden-modal-land' : ''}
      // style={timeRef.current === 0 ? {zIndex: '-1000'} : {}}
      onClick={()=>dispatch({type: 'EXIT_MODAL_BUY'})}  //--> xử lý click outside
      // className={showModalBuy ? 'animate__animated animate__fadeIn animate__faster' : 'animate__animated animate__fadeOut animate__faster'}
    >
      <div
        // className="modal-land box pb-4"
        className={showModalBuy ? 'modal-land box pb-4 show-modal-land-box' : 'modal-land box pb-4'}
        // className={showModalBuy ? 'modal-land box pb-4 show-modal-land-box' : timeRef.current === 1 ? 'hidden-modal-land box pb-4' : ''}
        onClick={e=>{e.stopPropagation()}} //--> xử lý click outside
      >
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