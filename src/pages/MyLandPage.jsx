import React from 'react';
import MyLand from '../components/MyLand/MyLand';
import { NavBarMobileContext } from 'src/contexts/NavBarMobileContext';


const MyLandPage = props => {
  const {showMenuCollapse, setShowMenuCollapse} = React.useContext(NavBarMobileContext)

  React.useEffect(()=>{
    //khi component này render ra, menu collapse sẽ tắt đi
    if(showMenuCollapse) {
      console.log('my land page', showMenuCollapse);
      setShowMenuCollapse(false)
    }
  }, [])

  return (
    <MyLand/>
  )
};

export default MyLandPage;