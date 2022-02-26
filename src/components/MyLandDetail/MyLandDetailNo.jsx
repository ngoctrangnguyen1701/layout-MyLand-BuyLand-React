import React from 'react';

const MyLandDetailNo = () => {
  return (
    <>
      <div className="d-flex align-item-center" style={{marginTop: '-25px'}}>
        <div className="content-right-no flex-grow-1">No. 051297</div>
        <div className="d-flex">
          <div className="content-right-sell-and-transfer my-auto">
            <button className="btn-sell">SELL</button>
            <button className="btn-transfer">TRANSFER</button>
          </div>
        </div>
      </div>
      <p className="content-right-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>  
    </>
  );
};

export default React.memo(MyLandDetailNo);