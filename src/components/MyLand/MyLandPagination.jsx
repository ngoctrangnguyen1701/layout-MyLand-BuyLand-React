import React from 'react';

const MyLandPagination = props => {
  return (
    <div className="content-pagination pb-3">
      <ul className="d-flex justify-content-center">
        <li className='ms-0'>&lt;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>&gt;</li>
      </ul>
    </div>
  );
};

export default React.memo(MyLandPagination);