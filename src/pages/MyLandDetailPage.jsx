import React from 'react';
import MyLandDetail from 'src/components/MyLandDetail/MyLandDetail';
import ChangeHeroModal from 'src/components/MyLandDetail/ChangeHeroModal'
import MyLandDetailContextProvider from 'src/contexts/MyLandDetailContext';

const MyLandDetailPage = props => {
  return (
    <>
      <MyLandDetailContextProvider>
        <MyLandDetail/>
        <ChangeHeroModal/>
      </MyLandDetailContextProvider>
    </>
  );
};

export default MyLandDetailPage;