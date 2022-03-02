import React from 'react';
import MyLandContent from './MyLandContent';
import MyLandHeader from './MyLandHeader';
import MyLandPagination from './MyLandPagination';
import useViewport from 'src/common/useViewport';


const MyLand = props => {
  const viewPort = useViewport()
  // const isMobile = viewPort.width < 1024
  const isMobile = viewPort.width < 992

  return (
    <div className='my-land'>
      <section id="content" className="content">
        <div className="container" style={{paddingTop: isMobile ? '15px' : '80px'}}>
          <MyLandHeader/>
          <MyLandContent/>
          <MyLandPagination/>
        </div>
      </section>
    </div>
  );
};

export default MyLand;