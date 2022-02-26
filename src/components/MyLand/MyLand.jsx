import React from 'react';
import MyLandContent from './MyLandContent';
import MyLandHeader from './MyLandHeader';
import MyLandPagination from './MyLandPagination';


const MyLand = props => {

  return (
    <div className='my-land'>
      <section id="content" className="content">
        <div className="container" style={{paddingTop: '80px'}}>
          <MyLandHeader/>
          <MyLandContent/>
          <MyLandPagination/>
        </div>
      </section>
    </div>
  );
};

export default MyLand;