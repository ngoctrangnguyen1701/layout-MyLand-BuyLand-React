import React from 'react';
import styled from 'styled-components';

import useViewport from 'src/common/useViewport';
import MyLandPagination from 'src/components/MyLand/MyLandPagination';
import Coordinates from './Coordinates';
import MyLandDetailNo from './MyLandDetailNo';
import MinningProcess from './MinningProcess';
import TextBorderShadow from '../TextBorderShadow';

const Title = styled.div`
  background-image: linear-gradient(to right, rgba(255, 54, 0, 0.8), rgba(255, 54, 0, 0.8));
  background-repeat: no-repeat;
  background-position: 0 64%;
  background-size: 479px 18px;
  margin: 0 0 50px 30px;

  @media(max-width: 767px){
    background-size: 288px 18px;
    margin-bottom: 30px;
  }
`

const MyLandDetail = () => {
const viewPort = useViewport()
  const isMobile = viewPort.width < 767
  const isHasHero = true
  // const isHasHero = false

  return (
    <div className='my-land'>
      <section id="content" className="content">
        <div className="container" style={{paddingTop: isMobile ? '30px' : '50px'}}>
          {/* <!-- CHANGE CODE IS HERE --> */}
          <Title>
            <TextBorderShadow
              text='YOUR WALLET'
              fontSize='50px'
              fontSize={isMobile ? '36px' : '50px'}
            />
          </Title>
          <div className="d-lg-flex" style={{marginBottom: '60px'}}>
            <Coordinates/>
            <div className="col-lg-6">
              <div className="content-right">
                <MyLandDetailNo isHasHero={isHasHero} isMobile={isMobile}/>
                <MinningProcess isHasHero={isHasHero} isMobile={isMobile}/>
              </div>
            </div>
          </div>
          <MyLandPagination/>
        </div>
      </section>
    </div>
  );
};

export default MyLandDetail;