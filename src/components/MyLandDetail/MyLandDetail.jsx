import React from 'react';
import styled from 'styled-components';

import MyLandPagination from 'src/components/MyLand/MyLandPagination';
import Coordinates from './Coordinates';
import MyLandDetailNo from './MyLandDetailNo';
import MinningProcess from './MinningProcess';
import TextBorderShadow from '../TextBorderShadow';
import ChangeHeroModal from './ChangeHeroModal';

const Title = styled.div`
  background-image: linear-gradient(to right, rgba(255, 54, 0, 0.8), rgba(255, 54, 0, 0.8));
  background-repeat: no-repeat;
  background-position: 0 64%;
  background-size: 479px 18px;
  margin: 0 0 50px 30px;
`

const MyLandDetail = () => {
  return (
    <div className='my-land'>
      <section id="content" className="content">
        <div className="container" style={{paddingTop: '50px'}}>
          {/* <!-- CHANGE CODE IS HERE --> */}
          <Title>
            <TextBorderShadow
              text='YOUR WALLET'
              fontSize='50px'
            />
          </Title>
          <div className="d-flex" style={{marginBottom: '100px'}}>
            <Coordinates/>
            <div className="col-6">
              <div className="content-right">
                <MyLandDetailNo/>
                <MinningProcess/>
              </div>
            </div>
          </div>

          <MyLandPagination/>
        </div>
      </section>
      {/* <ChangeHeroModal/> */}
    </div>
  );
};

export default MyLandDetail;