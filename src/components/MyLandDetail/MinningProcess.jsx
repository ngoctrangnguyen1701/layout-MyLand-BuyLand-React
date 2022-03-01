import React from 'react';
import { MyLandDetailContext } from 'src/contexts/MyLandDetailContext';
import {
  MinningProcessFrame,
  Title,
  RewardAndStatus,
  CharacterBox,
  CharacterImg,
  LeftSide,
  Icon,
  TextNoHero,
  BtnChooseHero,
} from './styles/MinningProcessStyle'
import { colorGradientGreen2, colorGreen } from 'src/common/styleComponentGlobal';

import BtnEffectBorderRun from '../BtnEffectBorderRun';
import Minning from 'src/components/Minning'
import TextBorderShadow from 'src/components/TextBorderShadow';

const MinningProcess = ({isHasHero, isMobile}) => {
  const dispatch = React.useContext(MyLandDetailContext).dispatch

  return (
    <div className="mt-5">
      <Title>
        <TextBorderShadow
          text='Minning process'
          fontSize={isMobile ? '34px' : '44px'}
        />
      </Title>
      <MinningProcessFrame>
        <div className="d-md-flex">
          <RewardAndStatus isMobile={isMobile}>
            <p>Reward:<span>534 HBG</span></p>
          </RewardAndStatus>
          <RewardAndStatus className="text-right" isMobile={isMobile}>
            <p>Status:<span>Minning</span></p>
          </RewardAndStatus>
        </div>

        <Minning
          height='34px'
          percent='50%'
          fontSize='20px'
          text='Minning: 50/100'
        />

        {isHasHero ? (
          <CharacterBox style={{marginTop: isMobile ? '15px' : '50px'}}>
            <CharacterImg isMobile={isMobile}/>
            <div className="ps-md-3">
              <div className="d-flex align-item-center">
                <LeftSide isMobile={isMobile}>
                  <p style={{fontSize: '25px'}}>#12345614</p>
                  <p>Minning:<span> 50</span></p>
                  <p>Level:<span> 4</span></p>
                  <p>Rarity:<span> 1</span></p>
                  <p>Class:<span> Warriorarrior</span></p>
                  <p>Skin:<span> Original</span></p>
                </LeftSide>

                <div className="ms-5">
                  <Icon isMobile={isMobile}>
                    <img src="images/icon-proccess-plus.png"/>
                    <span>325</span>
                  </Icon>
                  <Icon isMobile={isMobile} className="my-4">
                    <img src="images/icon-proccess-flame.png"/>
                    <span>643</span>
                  </Icon>
                  <Icon isMobile={isMobile}>
                    <img src="images/icon-proccess-arrow.png"/>
                    <span>135</span>
                  </Icon>
                </div>
              </div>
            </div>
            
            <div className="d-flex mt-4 w-100">
              <div className="w-50 d-flex justify-content-center">
                <BtnEffectBorderRun
                  width='146px'
                  height='39px'
                  backgroundImage={`linear-gradient(to bottom, ${colorGradientGreen2}, #0A0E00)`}
                  border={`1px solid ${colorGreen};`}
                  fontSize='18px'
                  textShadow='2px 2px 15px rgba(0, 255, 0, 0.8)'
                  backgroundImageTextHover={`linear-gradient(to bottom, ${colorGradientGreen2}, #0A0E00)`}
                  widthCricle={`${146 * 1.2}px`}
                  positionCircleLeft='-15px'
                  positionCircleTop='-70px'
                  text='CHANGE HERO'
                  handleClick={()=>dispatch({type: 'SHOW_MODAL_CHANGE_HERO'})}
                />
              </div>
              <div className="w-50 d-flex justify-content-center">
                <BtnEffectBorderRun
                  width='146px'
                  height='39px'
                  backgroundImage='linear-gradient(to right, #A20E00, #470036)'
                  border='1px solid #E50303'
                  fontSize='18px'
                  textShadow='2px 2px 15px rgba(221, 0, 0, 0.8)'
                  backgroundImageTextHover='linear-gradient(to right, #A20E00, #470036)'
                  widthCricle={`${146 * 1.2}px`}
                  positionCircleLeft='-15px'
                  positionCircleTop='-70px'
                  text='STOP MINNING'
                  handleClick={()=>dispatch({type: 'SHOW_MODAL_STOP_MINNING'})}
                />
              </div>
            </div>
          </CharacterBox>
        ) : (
          <>
            <TextNoHero>There are no heroes participating in mining</TextNoHero>
            <BtnChooseHero
              onClick={()=>dispatch({type: 'SHOW_MODAL_CHANGE_HERO'})}
            >CHOOSE HERO</BtnChooseHero>
          </>
        )
        }
      </MinningProcessFrame>
    </div>
  );
};

export default React.memo(MinningProcess);