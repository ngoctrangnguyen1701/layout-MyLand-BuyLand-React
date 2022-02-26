import React from 'react';

const MinningProcess = () => {
  return (
    <div className="content-right-minning-process mt-5">
      <div className="content-right-minning-process-title">Minning process</div>
      <div className="content-right-minning-process-box p-3">
        <div className="d-flex reward-and-status">
          <div className="w-50">
            <p className="mb-0">
              Reward:
              <span>534 HBG</span>
            </p>
          </div>
          <div className="w-50 text-right">
            <p className="mb-0">
              Status:
              <span>Minning</span>
            </p>
          </div>
        </div>

        <div className="content-right-minning-process-box-line my-3">
          <div className="line-percent"></div>
          <span>Minning: 50/100</span>
        </div>

        <div className="content-right-minning-process-box-character d-flex flex-wrap mt-5">
          <div className="img"></div>
          <div className="ps-3">
            <div className="d-flex align-item-center">
              <div className="left">
                <p style={{fontSize: '25px'}}>#12345614</p>
                <p>
                  Minning:
                  <span> 50</span>
                </p>
                <p>
                  Level:
                  <span> 4</span>
                </p>
                <p>
                  Rarity:
                  <span> 1</span>
                </p>
                <p>
                  className:
                  <span> Warriorarrior</span>
                </p>
                <p>
                  Skin:
                  <span> Original</span>
                </p>
              </div>

              <div className="right ms-5">
                <div className="icon">
                  <img src="images/icon-proccess-plus.png"/>
                  <span>325</span>
                </div>
                <div className="icon my-4">
                  <img src="images/icon-proccess-flame.png"/>
                  <span>643</span>
                </div>
                <div className="icon">
                  <img src="images/icon-proccess-arrow.png"/>
                  <span>135</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="d-flex mt-4 w-100">
            <div className="w-50">
              <button className="btn-change-hero d-block mx-auto">CHANGE HERO</button>
            </div>
            <div className="w-50">
              <button className="btn-stop-minning d-block mx-auto">STOP MINNING</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MinningProcess);