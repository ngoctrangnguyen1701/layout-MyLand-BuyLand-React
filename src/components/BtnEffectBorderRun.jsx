import React from 'react';
import styled, {keyframes} from 'styled-components';
import { colorGreen } from 'src/common/styleComponentGlobal';

const borderRun = keyframes`
  100%{transform: rotate(360deg);}
`
const Btn = styled.button`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  background-image: ${props => props.backgroundImage ? props.backgroundImage : ''};
  border: ${props => props.border ? props.border : ''};
  box-shadow: ${props => props.boxShadow ? props.boxShadow : ''};
  padding: 0;

  line-height: ${props => props.height ? props.height : ''};
  font-size: ${props => props.fontSize ? props.fontSize : ''};
  font-family: Progress_Bold_Italic;
  color: white;
  text-shadow: ${props => props.textShadow ? props.textShadow : ''};

  position: relative;
  overflow: hidden;
  
  .text{
    background-image: ${props => props.backgroundImage ? props.backgroundImage : ''};
    width: calc(100% - 2px);
    height: calc(100% - 2px);

    position: absolute;
    z-index: 1;
    top: 1px; //phân nửa của 3px cái trừ ra khi tính width cho text bên trong
    left: 1px;
    transition: .3s;
  }

  .circle-white{
    // width: calc(130px * 1.2);
    // height: calc(130px * 1.2);
    width: ${props => props.widthCricle ? props.widthCricle : ''};
    height: ${props => props.widthCricle ? props.widthCricle : ''};
    border-radius: 50%;

    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    // background-image: linear-gradient(white, white), linear-gradient(${colorGreen}, ${colorGreen}),
    //                   linear-gradient(white, white), linear-gradient(${colorGreen}, ${colorGreen})
    // ;
    background-image: linear-gradient(white, white),
                      ${props => props.backgroundImageTextHover ? props.backgroundImageTextHover : ''},
                      linear-gradient(white, white), 
                      ${props => props.backgroundImageTextHover ? props.backgroundImageTextHover : ''};

    position: absolute;
    // left: -13px;
    // top: -58px;
    left: ${props => props.positionCircleLeft ? props.positionCircleLeft : ''};
    top: ${props => props.positionCircleTop ? props.positionCircleTop : ''};

    opacity: 0;
  }

  &:hover{
    background-image: ${props => props.backgroundImageTextHover ? props.backgroundImageTextHover : ''};

    .text{
      background-image: ${props => props.backgroundImageTextHover ? props.backgroundImageTextHover : ''};
      color: ${props => props.colorTextHover ? props.colorTextHover : 'white'};
      transition: .3s;
    }
    .circle-white{
      opacity: 1;
      animation: ${borderRun} 1s linear infinite;
    }
  }
`

const BtnEffectBorderRun = (props) => {
  const {
    width,
    height,
    backgroundImage,
    border,
    boxShadow,
    fontSize,
    textShadow,
    backgroundImageTextHover,
    colorTextHover,
    widthCricle,
    positionCircleLeft,
    positionCircleTop,
    text, 
    handleClick
  } = props

  return (
    <Btn
      width={width}
      height={height}
      backgroundImage={backgroundImage}
      border={border}
      boxShadow={boxShadow}
      fontSize={fontSize}
      textShadow={textShadow}
      backgroundImageTextHover={backgroundImageTextHover}
      colorTextHover={colorTextHover}
      widthCricle={widthCricle}
      positionCircleLeft={positionCircleLeft}
      positionCircleTop={positionCircleTop}
      onClick={handleClick}
    >
      <div className="circle-white"></div>
      <div className="text">
        {text}
      </div>
    </Btn>
  );
};

export default React.memo(BtnEffectBorderRun);