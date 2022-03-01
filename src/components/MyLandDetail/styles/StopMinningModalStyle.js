import styled, { keyframes } from "styled-components"
import {
  colorGreen,
  colorBlack,
  colorGradientGreenBlack1,
  colorGradientGreen1,
  colorGradientGreen2,
  textShadowGreen,
} from 'src/common/styleComponentGlobal'

export const Modal = styled.div`
  width: 100%;
  // height: calc(100% + 144px); //144 là height của thanh navbar phía trên
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;

  // position: absolute;
  position: fixed;
  top: 0;
  z-index: -1000;
  opacity: 0;
  transition: .5s;
  ${props => props.show && `
    z-index: 1000;
    opacity: 1;
  `}
`

export const ModalFrame = styled.div`
  background-image: linear-gradient(to bottom, ${colorBlack}, ${colorGradientGreenBlack1});
  width: 620px;
  margin: auto;
  padding-bottom: 30px;

  border: 1px solid ${colorGreen};
  box-shadow: 2px 2px 15px ${colorGreen};
  opacity: 0;
  transform: translateY(-100px);
  transition: .5s;

  ${props => props.show && `transform: translateY(0); opacity: 1;`}
  @media(max-width: 1023px){
    width: 90%
  }
`

export const ModalHeader = styled.div`
  ${textShadowGreen}
  color: white;
  text-align: center;
  font-size: 28px;
  font-family: Progress_Bold_Italic;

  background-color: ${colorGradientGreen2};
  padding: 10px 0;
`

export const ModalContent = styled.div`
  color: white;
  text-align: center;
  p{
    font-family: Helvetica_Neue;
    font-size: 28px;
  }
  span{
    font-family: font_primary;
    color: ${colorGreen};
  }
`

const borderRun = keyframes`
  100%{transform: rotate(360deg);}
`

export const ModalBtn = styled.button`
  width: 130px;
  height: 41px;
  background-color: ${colorGreen};
  margin: 0 auto;
  display: block;
  border: none;
  box-shadow: 1px 1px 5px ${colorGreen};

  line-height: 41px;
  font-size: 22px;
  font-family: Progress_Bold_Italic;
  color: white;
  ${textShadowGreen}

  position: relative;
  overflow: hidden;

  &:hover{
    .text{
      background-image: linear-gradient(45deg, ${colorGradientGreen1}, ${colorGradientGreen2});
      color: ${colorGreen};
      transition: .3s;
    }
    .circle-white{
      opacity: 1;
      animation: ${borderRun} 1s linear infinite;
    }
  }
  .circle-white{
    width: calc(130px * 1.2);
    height: calc(130px * 1.2);
    border-radius: 50%;

    // background-color: ${colorGreen};
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    // background-image: linear-gradient(white, white), linear-gradient(${colorGreen}, ${colorGreen});
    background-image: linear-gradient(white, white), linear-gradient(${colorGreen}, ${colorGreen}),
                      linear-gradient(white, white), linear-gradient(${colorGreen}, ${colorGreen})
    ;

    position: absolute;
    left: -13px;
    top: -58px;
    opacity: 0;
  }
  .text{
    background-color: #031100;
    width: calc(100% - 3px);
    height: calc(100% - 3px);

    position: absolute;
    z-index: 1;
    top: 1.5px; //phân nửa của 3px cái trừ ra khi tính width cho text bên trong
    left: 1.5px;
    transition: .3s;
  }
`