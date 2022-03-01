import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import {
  NavBar,
  LogoImg,
  Title,
  IconMenu,
  IconCart,
  MenuCollapse,
  MenuItem,
  Address,
} from 'src/components/styles/NavBarMainMobileStyle'

const NavBarMainMobile = props => {
  const matchBuyLand = useMatch('/')
  const matchMyLand = useMatch('/my-land')
  const matchMyLandDetail = useMatch('/my-land/detail')

  const [showMenuCollapse, setShowMenuCollapse] = React.useState(false)

  React.useEffect(()=>{
    //chặn thanh cuộn dọc của thẻ <body> khi bật modal change hero
    const bodyElement = document.getElementsByTagName('body')[0]
    if(showMenuCollapse){
      bodyElement.style.overflow = 'hidden'
      bodyElement.style.height = '100%'
    }
    else{
      bodyElement.style.overflow = 'auto'
      bodyElement.style.height = 'auto'
    }
  }, [showMenuCollapse])

  return (
    <>
      <NavBar>
        <div className="d-flex align-items-center">
          <LogoImg>
            <Link to='/'>
              <img src="images/logo.png"/>
            </Link>
          </LogoImg>
          <Title>
            <Link to='/'>HEROland</Link>
          </Title>
          <IconMenu onClick={()=>setShowMenuCollapse(!showMenuCollapse)}>
            <img src='images/icon-menu.png'/>
          </IconMenu>
        </div>
      </NavBar>

      <MenuCollapse show={showMenuCollapse}>
        <MenuItem>
          <Link to="/" className={matchBuyLand && 'active'}>Buy land</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/my-land" className={(matchMyLand || matchMyLandDetail) && 'active'}>My land</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">How to buy</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">
            <Address>0x23ac...d1365d</Address>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">
            <IconCart><img src="images/icon-cart.png"/></IconCart>
          </Link>
        </MenuItem>
      </MenuCollapse>
    </>
    
  );
};

export default React.memo(NavBarMainMobile);