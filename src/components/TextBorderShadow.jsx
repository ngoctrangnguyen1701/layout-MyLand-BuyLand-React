import React from 'react';
import styled from 'styled-components';
import { colorGreen, textShadowGreen } from 'src/common/styleComponentGlobal';

const Text = styled.div`
  color: white;
  font-size: ${props => props.fontSize ? props.fontSize : '44px'};
  position: relative;

  .text {
    position: absolute;
    top: 0;
    z-index: 1;
    text-shadow: -1px 0 ${colorGreen}, 0 1px ${colorGreen}, 1px 0 ${colorGreen}, 0 -1px ${colorGreen};
  }

  .text-shadow {
    ${textShadowGreen}
  }
`

const TextBorderShadow = ({text, fontSize}) => {
  return (
    <Text fontSize={fontSize}>
      <div className='text'>{text}</div>
      <div className='text-shadow'>{text}</div>
    </Text>
  );
};

export default React.memo(TextBorderShadow);