import React from 'react';
import styled from 'styled-components';
import {
  colorGradientGreen1,
  colorGradientGreen2,
  colorGreen,
} from 'src/common/styleComponentGlobal';

const Line = styled.div`
  background-image: linear-gradient(45deg, ${colorGradientGreen1}, ${colorGradientGreen2});
  border: 1px solid ${colorGreen};
  position: relative;
  height: ${props => props.height ? props.height : '34px'};
`
const Percent = styled.div`
  background-color: ${colorGreen};
  width: ${props => props.percent ? props.percent : '0%'};
  height: 100%;
`
const Text = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
  font-family: Helvetica_Neue;
  color: white;
  font-size: ${props => props.fontSize ? props.fontSize : '20px'};

  position: absolute;
  z-index: 1;
  top: 2px;
`

const Minning = props => {
  const {
    text,
    percent,
    fontSize,
    height
  } = props

  return (
    <Line height={height}>
      <Percent percent={percent}/>
      <Text fontSize={fontSize}>{text}</Text>
    </Line>
  );
};

export default React.memo(Minning);