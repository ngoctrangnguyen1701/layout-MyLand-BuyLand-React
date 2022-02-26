import React from 'react';
// import Minning from '../../components/Minning';
// import Minning from '../../Minning';
import Minning from 'src/components/Minning'
import {
  MinningProcessFrame,
  Title,
  RewardAndStatus,
  CharacterBox,
  CharacterImg,
  LeftSide,
  Icon,
  BtnChangeHero,
  BtnStopMinning,
} from './styles/MinningProcessStyle'

const MinningProcess = () => {
  return (
    <div className="mt-5">
      <Title>Minning process</Title>
      <MinningProcessFrame>
        <div className="d-flex">
          <RewardAndStatus>
            <p>
              Reward:
              <span>534 HBG</span>
            </p>
          </RewardAndStatus>
          <RewardAndStatus className="text-right">
            <p>
              Status:
              <span>Minning</span>
            </p>
          </RewardAndStatus>
        </div>

        <Minning
          height='34px'
          percent='50%'
          fontSize='20px'
          text='Minning: 50/100'
        />

        <CharacterBox>
          <CharacterImg/>
          <div className="ps-3">
            <div className="d-flex align-item-center">
              <LeftSide>
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
                  class:
                  <span> Warriorarrior</span>
                </p>
                <p>
                  Skin:
                  <span> Original</span>
                </p>
              </LeftSide>

              <div className="ms-5">
                <Icon>
                  <img src="images/icon-proccess-plus.png"/>
                  <span>325</span>
                </Icon>
                <Icon className="my-4">
                  <img src="images/icon-proccess-flame.png"/>
                  <span>643</span>
                </Icon>
                <Icon>
                  <img src="images/icon-proccess-arrow.png"/>
                  <span>135</span>
                </Icon>
              </div>
            </div>
          </div>
          
          <div className="d-flex mt-4 w-100">
            <div className="w-50">
              <BtnChangeHero>CHANGE HERO</BtnChangeHero>
            </div>
            <div className="w-50">
              <BtnStopMinning>STOP MINNING</BtnStopMinning>
            </div>
          </div>
        </CharacterBox>
      </MinningProcessFrame>
    </div>
  );
};

export default React.memo(MinningProcess);