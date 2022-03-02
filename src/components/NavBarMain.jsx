import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { colorGreen } from 'src/common/styleComponentGlobal';
import {
  IconMenu,
  MenuCollapse,
  MenuItem,
  Address,
  IconCart,
} from 'src/components/styles/NavBarMainMobileStyle'
import { NavBarMobileContext } from 'src/contexts/NavBarMobileContext';

const BoxLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const ImgLogo = styled.div`
  width: 50%;
  // margin-top: -40px;
  margin-left: -60px;

  img{
    width: 100%;
    // display: block;
  }
`
const TitleLogo = styled.div`
  color: ${colorGreen};
  font-size: 47px;

  margin-left: -30px;

  
  // font-size: 2.5rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  };
  width: auto;
  flex-grow: 1;
  margin-left: -15px;
`

const NavBarMain = ({isCollapse}) => {
  const matchBuyLand = useMatch('/')
  const matchMyLand = useMatch('/my-land')
  const matchMyLandDetail = useMatch('/my-land/detail')

  const {showMenuCollapse, setShowMenuCollapse} = React.useContext(NavBarMobileContext)
  console.log(showMenuCollapse);

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
      <section id="nav" style={{padding: '0px 30px 0 40px'}}>
        <div className="row align-items-center" style={{marginTop: '-13px'}}>
          {/* <div className="col-lg-3"> */}
          <div style={{width: '400px'}}>
            <Link to="/" className="logo">
              {/* <img src="images/logo.png" className="logo-img"/>
              <span className="logo-title">HEROland</span> */}
              <BoxLogo>
                <ImgLogo>
                  <img src="images/logo.png"/>
                </ImgLogo>
                <TitleLogo>HEROland</TitleLogo>
              </BoxLogo>
            </Link>
          </div>
          {/* <div className="col-lg-9"> */}
          <div style={{width: 'calc(100% - 400px)'}}>
          {/* <ul style={{width: 'calc(100% - 400px)'}}> */}
            {isCollapse ? (
              <IconMenu onClick={()=>setShowMenuCollapse(!showMenuCollapse)}>
                <img src='images/icon-menu.png'/>
              </IconMenu>
            ) : (
              <ul>
                <li className="nav-item">
                  <Link to="/" className={matchBuyLand && 'active'}>Buy land</Link>
                </li>
                <li className="nav-item">
                  <Link to="/my-land" className={(matchMyLand || matchMyLandDetail) && 'active'}>My land</Link>
                </li>
                <li className="nav-item">
                  <Link to="/">How to buy</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="address background-gradient-green">
                    0x23ac...d1365d
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <img src="images/icon-cart.png"/>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>

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

export default React.memo(NavBarMain);