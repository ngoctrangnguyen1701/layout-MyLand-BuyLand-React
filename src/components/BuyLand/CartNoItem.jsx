import React from 'react';

const CartNoItem = props => {
  return (
    <div className="col-3 side-bar ps-0">
      <div className="side-bar-header">
        <span className="side-bar-title">Cart:</span>
        <span className="side-bar-num-basket d-inline-block ms-2">0</span>
      </div>
      <div className="px-0 side-bar-line"></div>
      <div className="side-bar-content">
        <div className="empty-cart">
          <div className="d-flex align-items-end">
            <img src="images/icon-global.png"/>
            <span>YOUR CART IS EMPTY</span>
          </div>
          <p className="empty-cart-tutorial mt-4">Select landplot on the map.</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartNoItem);