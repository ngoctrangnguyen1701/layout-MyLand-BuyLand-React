import React from 'react';
import MyLandPagination from 'src/components/MyLand/MyLandPagination';
import Coordinates from './Coordinates';
import MyLandDetailNo from './MyLandDetailNo';
import MinningProcess from './MinningProcess';

const MyLandDetail = () => {
  return (
    <div className='my-land'>
      <section id="content" className="content">
        {/* <div className=""> */}
          <div className="container" style={{paddingTop: '80px'}}>
            {/* <!-- CHANGE CODE IS HERE --> */}
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
        {/* </div> */}
      </section>
    </div>
  );
};

export default MyLandDetail;