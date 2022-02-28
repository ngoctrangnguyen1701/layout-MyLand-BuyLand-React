import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  height: 144px;
  background: black;
  padding: '15px 10px 0 10px';
`
const LogoImg = styled.div`
  width: 20%;
`

const NavBarMainMobile = props => {
  const matchBuyLand = useMatch('/')
  const matchMyLand = useMatch('/my-land')
  const matchMyLandDetail = useMatch('/my-land/detail')

  return (
    <NavBar>
      <div className="row">
        <LogoImg>
          <img src="images/logo.png"/>
        </LogoImg>
        {/* <div className="col-lg-3">
          <Link to="/" className="logo">
            <img src="images/logo.png" className="logo-img"/>
            <span className="logo-title">HEROland</span>
          </Link>
        </div>
        <div className="col-lg-9">
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
        </div> */}
      </div>
    </NavBar>
  );
};

export default React.memo(NavBarMainMobile);