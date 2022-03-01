import React from 'react';
import useViewport from 'src/common/useViewport';

const MyLandHeader = props => {
  const viewPort = useViewport()
  const isMobile = viewPort.width < 1024

  return (
    <>
      <div className="row content-header">
        <div className="col-lg-7">
          <div className="d-lg-flex mb-4">
            {isMobile ? (
              <p className="mb-0 flex-grow-1 wallet-address">0x57D890Df853908965
              <br/>Be531B58816f2EfC8e392D3</p>
            ) : <p className="mb-0 flex-grow-1 wallet-address">0x57D890Df853908965Be531B58816f2EfC8e392D3</p>}
            
            <div className="text-right mt-3 mt-lg-0">
              <img src="images/icon-copy.png" className="d-inline-block me-2"/>
              <img src="images/icon-paste.png"/>
            </div>
          </div>
          <div className="content-header-input d-flex">
            <div className="content-header-coin">
              <img src="images/coin.png"/>
            </div>
            <input placeholder="Price"/>
            <div className="content-header-hbg">HBG</div>
          </div>
        </div>
        <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0">
          <div>
            <div className="row">
              <div className="content-header-box me-5">
                <div className="m-auto">
                  <img src="images/icon-land.png"/>
                  <p className="mb-0">
                    50
                    <span>Land</span>
                  </p>
                </div>
              </div>
              <div className="content-header-box">
                <div className="m-auto">
                  <img src="images/icon-hero.png"/>
                  <p className="mb-0">
                    50
                    <span>Land</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="content-header-total my-4">total my land size: <span>150 Km2</span></p>
          </div>
        </div>
      </div>

      <div className="content-header-line"></div> 
    </>
  );
};

export default React.memo(MyLandHeader);