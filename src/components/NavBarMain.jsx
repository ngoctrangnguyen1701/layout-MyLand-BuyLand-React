import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import {
  colorGreen,
  colorGradientGreen1,
  colorGradientGreen2,
 } from 'src/common/styleComponentGlobal';
import {
  IconMenu,
  MenuCollapse,
  MenuItem,
  Address,
  IconCart,
  MenuItemAddress,
} from 'src/components/styles/NavBarMainMobileStyle'
import { NavBarMobileContext } from 'src/contexts/NavBarMobileContext';

const GroupBox = styled.div`
  background-color: black;
  height: 144px;
  padding: 0px 30px 0 40px;
  box-shadow: 0px 10px 100px rgba(0, 255, 0, 0.5);
  width: 100%;

  position: absolute;
  z-index: 10;
  top: 0;
  
  font-family: 'font_primary';

  @media (max-width: 600px) {
    height: 115px;
  }
`
const BoxLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  
  a{
    display: block;
    color: white;
  }

  .logo-img{
    width: 50%;
    margin-left: -60px;
  
    img{
      width: 100%;
    }
  }

  .logo-title{
    color: ${colorGreen};
    font-size: 47px;

    width: auto;
    margin-left: -30px;

    @media (max-width: 600px) {
      font-size: 2rem;
    };
  }

  @media(max-width: 600px){
    width: 300px;
  }
`
const BoxMenu = styled.div`
  width: calc(100% - 400px);

  ul{
    display: flex;
    justify-content: right;
    align-items: center;
    margin-bottom: 0;
  }

  li{
    margin-left: 20px;
    text-align: center;
    a{
      font-size: 23px;
      color: white;

      &:hover{
        color: ${colorGreen};
      }
    }

    .address{
      border: 1px solid ${colorGreen};
      display: block;
      height: 50px;
      background-image: linear-gradient(to right, ${colorGradientGreen1}, ${colorGradientGreen2});
      padding: 0 30px;

      line-height: 50px;
      text-align: center;
    }

    .active{
      color: ${colorGreen};
    }
  }

  @media(max-width: 600px){
    width: calc(100% - 300px);
  } 
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
      bodyElement.style.minHeight = '600px'
    }
    else{
      bodyElement.style.overflow = 'auto'
      bodyElement.style.height = 'auto'
    }
  }, [showMenuCollapse])

  return (
    <>
      <GroupBox>
        <div className="row align-items-center" style={{marginTop: '-13px'}}>
          <BoxLogo>
            <Link to="/" className="logo-img">
              <img src="images/logo.png"/>
            </Link>
            <Link to="/" className='logo-title'>
              HEROland
            </Link>
          </BoxLogo>
          <BoxMenu>
            {isCollapse ? (
              <IconMenu onClick={()=>setShowMenuCollapse(!showMenuCollapse)}>
                <img src='images/icon-menu.png'/>
              </IconMenu>
            ) : (
              <ul>
                <li>
                  <Link to="/" className={matchBuyLand && 'active'}>Buy land</Link>
                </li>
                <li>
                  <Link to="/my-land" className={(matchMyLand || matchMyLandDetail) && 'active'}>My land</Link>
                </li>
                <li>
                  <Link to="/">How to buy</Link>
                </li>
                <li>
                  <Link to="/" className="address">
                    0x23ac...d1365d
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src="images/icon-cart.png"/>
                  </Link>
                </li>
              </ul>
            )}
          </BoxMenu>
        </div>
      </GroupBox>

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
        <MenuItemAddress>
          <Link to="/">
            <Address>0x23ac...d1365d</Address>
          </Link>
        </MenuItemAddress>
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