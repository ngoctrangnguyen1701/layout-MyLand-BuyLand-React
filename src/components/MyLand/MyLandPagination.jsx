import React from 'react';
import { colorGreen, textShadowGreen } from 'src/common/styleComponentGlobal';
import styled from 'styled-components';

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  li{
    margin-left: 40px;
    color: #A0A0A0;
    font-size: 30px;
    font-family: HemiHeadRg_BoldItalic;
    cursor: pointer;

    &:hover{
      color: ${colorGreen};
      ${textShadowGreen}
    }
  }
`

const MyLandPagination = props => {
  return (
    <Pagination>
      <li className='ms-0'>&lt;</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>&gt;</li>
    </Pagination>
  );
};

export default React.memo(MyLandPagination);