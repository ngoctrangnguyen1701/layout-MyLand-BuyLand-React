import React from 'react';
import MyLandDetail from 'src/components/MyLandDetail/MyLandDetail';
import ChangeHeroModal from 'src/components/MyLandDetail/ChangeHeroModal'
import MyLandDetailContextProvider from 'src/contexts/MyLandDetailContext';
import StopMinningModal from 'src/components/MyLandDetail/StopMinningModal';
import { NavBarMobileContext } from 'src/contexts/NavBarMobileContext';

const MyLandDetailPage = props => {
  const {showMenuCollapse, setShowMenuCollapse} = React.useContext(NavBarMobileContext)

  React.useEffect(()=>{
    //khi component này render ra, menu collapse sẽ tắt đi
    if(showMenuCollapse) setShowMenuCollapse(false)
  }, [])
  
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