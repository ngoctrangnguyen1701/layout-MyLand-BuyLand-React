import React from 'react';

const Coordinates = () => {
  return (
    <div className="col-6 d-flex justify-content-end">
      <div className="content-left me-5">
        <div className="content-left-img"></div>
        <div className="content-left-text mt-4">
          <p className="mb-0">Coordinates:</p>
          <span>123.0195058, 4.063132087</span>
        </div>
        <button className="btn-view-on-map mt-3 d-block mx-auto">VIEW ON MAP</button>
      </div>
    </div>
  );
};

export default React.memo(Coordinates);