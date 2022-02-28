import React, { useEffect } from 'react';
import { MyLandDetailContext } from 'src/contexts/MyLandDetailContext';

import {
  Modal,
  ModalFrame,
  ModalHeader,
  ModalContent,
  HeroItem,
  HeroImg,
  HeroId,
  HeroText,
  BtnApply,
} from './styles/ChangeHeroModalStyle'

const ChangeHeroModal = () => {
  const showModalChangeHero = React.useContext(MyLandDetailContext).state.showModalChangeHero
  const dispatch = React.useContext(MyLandDetailContext).dispatch

  React.useEffect(()=>{
    //chặn thanh cuộn dọc của thẻ <body> khi bật modal change hero
    const bodyElement = document.getElementsByTagName('body')[0]
    console.log(bodyElement);
    if(showModalChangeHero){
      bodyElement.style.overflow = 'hidden'
      bodyElement.style.height = '100%'
    }
    else{
      bodyElement.style.overflow = 'auto'
      bodyElement.style.height = 'auto'
    }
  }, [showModalChangeHero])

  return (
    <Modal
      onClick={()=>dispatch({type: 'EXIT_MODAL_CHANGE_HERO'})}
      show={showModalChangeHero}
    >
      <ModalFrame
        onClick={e=>{e.stopPropagation()}}
        show={showModalChangeHero}
      >
        <ModalHeader>CHANGE HERO</ModalHeader>
        <div className='pe-3'>
          <ModalContent>
            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>

            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>

            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>

            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>

            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>

            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>
            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>
            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>
            <div className="col-4 d-flex">
              <HeroItem>
                <HeroImg/>
                <HeroId>#123456</HeroId>
                <HeroText>
                  <p>Rarity:<span>1</span></p>
                </HeroText>
                <HeroText>
                  <p>Minning:<span>50</span></p>
                </HeroText>
              </HeroItem>
            </div>
          </ModalContent>
        </div>
          <div className='d-flex'>
            <BtnApply 
              onClick={()=>dispatch({type: 'EXIT_MODAL_CHANGE_HERO'})}
            >APPLY
            </BtnApply>
          </div>
      </ModalFrame>
    </Modal>
  );
};

export default React.memo(ChangeHeroModal);