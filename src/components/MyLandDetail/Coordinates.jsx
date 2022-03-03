import React from 'react';
import styled from 'styled-components';
import BtnEffectBorderRun from '../BtnEffectBorderRun';
import {
  colorGreen,
  boxShadowGreen,
  textShadowGreen,
} from 'src/common/styleComponentGlobal'

const BoxImg = styled.div`
  width: 450px;
  height: 450px;


  background-image: url('images/land-large-01.png');
  background-position: center;
  border: 1px solid ${colorGreen};
  ${boxShadowGreen}

  @media (max-width: 992px) {
    width: 16rem;
    height: 16rem;
    margin: 0 auto;
  }
`
const ContentLeftText = styled.div`
  font-size: 27px;
  color: ${colorGreen};
  text-align: center;

  p{
    margin-bottom: 0;
  }

  span{
    color: white;
    ${textShadowGreen}
  }

  @media (max-width: 992px) {
    margin-left: 15px;
  }
`

const Coordinates = () => {
  return (
    <div className="col-lg-6 d-flex justify-content-center  mb-5 mb-lg-0 pb-3 pb-lg-0">
      <div className="content-left me-lg-5 d-md-flex align-items-center d-lg-block">
        <BoxImg/>
        <ContentLeftText>
          <div className="mt-4 mt-md-4">
            <p>Coordinates:</p>
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
        </ContentLeftText>
      </div>
    </div>
  );
};

export default React.memo(Coordinates);