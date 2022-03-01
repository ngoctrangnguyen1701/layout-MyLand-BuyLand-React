import React from 'react';
import MyLandDetail from 'src/components/MyLandDetail/MyLandDetail';
import ChangeHeroModal from 'src/components/MyLandDetail/ChangeHeroModal'
import MyLandDetailContextProvider from 'src/contexts/MyLandDetailContext';
import StopMinningModal from 'src/components/MyLandDetail/StopMinningModal';

const MyLandDetailPage = props => {
  return (
    <>
      <MyLandDetailContextProvider>
        <MyLandDetail/>
        <ChangeHeroModal/>
        <StopMinningModal/> 
      </MyLandDetailContextProvider>
    </>
  );
};

export default MyLandDetailPage;