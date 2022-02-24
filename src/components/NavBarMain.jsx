import React from 'react';

const NavBarMain = props => {
  return (
    <section id="nav">
      <div className="row">
        <div className="col-3">
          <a href="/" className="logo">
            <img src="images/logo.png" className="logo-img"/>
            <span className="logo-title">HEROland</span>
          </a>
        </div>
        <div className="col-9">
          <ul>
            <li className="nav-item">
              <a href="">Buy land</a>
            </li>
            <li className="nav-item">
              <a href="">My land</a>
            </li>
            <li className="nav-item">
              <a href="">How to buy</a>
            </li>
            <li className="nav-item">
              <a href="" className="address background-gradient-green">
                0x23ac...d1365d
              </a>
            </li>
            <li className="nav-item">
              <a href="">
                <img src="images/icon-cart.png"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default React.memo(NavBarMain);