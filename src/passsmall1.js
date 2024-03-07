import React from 'react';
import Smallx from './small';
import './index.css';

const MainComponent5 = ({ jsonsmall }) => {
  return (
    <div className="smalldiv">
      {jsonsmall.map((item, index) => (
       index > 7 && <Smallx key={index} data={item} />
      ))}
    </div>
  );
};

export default MainComponent5;