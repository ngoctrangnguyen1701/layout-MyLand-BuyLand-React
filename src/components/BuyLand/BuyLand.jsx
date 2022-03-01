import React from 'react';
import styled from 'styled-components';
import { BuyLandContext } from 'src/contexts/BuyLandContext';
import Landplot from './Landplot';
import Sidebar from './Sidebar';

const Landom = styled.div`
  width: 100px;
  height: 20px;
  background: white;
  cursor: pointer;

  color: black;
  font-family: Helvetica_Bold;
  font-size: 21px;
  line-height: 20px;
  text-align: center;

  position: absolute;
  top: ${props => props.top ? props.top : '0%'};
  left: ${props => props.left ? props.left : '0%'};
`
const LeftFrame = styled.div`
  @media(min-width: 1024px){
    height: 100%
  }
`
const BgLeftFrame = styled.div`
  background-image: url('/images/bg-main.jpg');
  background-size: cover;
  min-height: 600px;
  @media (min-width: 1024px) {
    height: 100%;
    position: absolute;
  }
`

const BuyLand = props => {
  const typeLandplot = React.useContext(BuyLandContext).state.typeLandplot
  const dispatch = React.useContext(BuyLandContext).dispatch


  return (
    <section id="content-buy-land">
      <LeftFrame className="d-lg-flex">
        <BgLeftFrame className="col-12 col-lg-9 d-lg-flex main">
          {typeLandplot ? <Landplot/> : (
            <>
              <Landom
                top='80%'
                left='50%'
                onClick={()=>dispatch({type: 'SHOW_LANDPLOT', payload: {typeLandplot: 'addToCart'}})}
              >
                Landom
              </Landom>
              <Landom
                top='50%'
                left='30%'
                onClick={()=>dispatch({type: 'SHOW_LANDPLOT', payload: {typeLandplot: 'soild'}})}
              >
                Landom
              </Landom>
              <Landom
                top='20%'
                left='60%'
                onClick={()=>dispatch({type: 'SHOW_LANDPLOT', payload: {typeLandplot: 'remove'}})}
              >
                Landom
              </Landom>
              <Landom
                top='40%'
                left='10%'
                onClick={()=>dispatch({type: 'SHOW_LANDPLOT', payload: {typeLandplot: 'sellAndTransfer'}})}
              >
                Landom
              </Landom>
            </>
          )}
        </BgLeftFrame>
        <Sidebar/>
      </LeftFrame>
    </section>
  );
};

export default BuyLand;