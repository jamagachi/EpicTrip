import React from 'react';
import './BackgroundImg.css';

const BackgroundImg = (props) => {
  const { bgImg, content } = props;
  return (
    <div className='background-img'>
      <div
        className='bg-img'
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default BackgroundImg;
