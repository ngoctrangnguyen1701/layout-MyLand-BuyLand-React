import React from 'react';
import LandItem from './LandItem';
import landList from './data/landList';

const MyLandContent = props => {
  console.log(landList);

  return (
    <div className="content-main">
      <div className="row justify-content-arround justify-content-lg-between">
        {landList.map((item, index) => <LandItem key={index} {...item}/>)}
      </div>
    </div>
  );
};

export default React.memo(MyLandContent);