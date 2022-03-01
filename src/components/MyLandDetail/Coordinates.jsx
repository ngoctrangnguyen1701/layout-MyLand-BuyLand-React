import React from 'react';
import BtnEffectBorderRun from '../BtnEffectBorderRun';

const Coordinates = () => {
  return (
    <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end  mb-5 mb-lg-0 pb-3 pb-lg-0">
      <div className="content-left me-lg-5">
        <div className="content-left-img"></div>
        <div className="content-left-text mt-4">
          <p className="mb-0">Coordinates:</p>
          <span>123.0195058, 4.063132087</span>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <BtnEffectBorderRun
            width='184px'
            height='39px'
            backgroundImage='linear-gradient(to bottom, #FF5200, #450C00)'
            border='1px solid #FF5200'
            fontSize='18px'
            textShadow='2px 2px 15px rgba(255, 82, 0, 0.8)'
            backgroundImageTextHover='linear-gradient(to bottom, #FF5200, #450C00)'
            widthCricle={`${184 * 1.2}px`}
            positionCircleLeft='-15px'
            positionCircleTop='-93px'
            text='VIEW ON MAP'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Coordinates);