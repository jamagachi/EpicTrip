import React from 'react';
import img from '../../public/assets/travel1.png';

const BackgroundImg = (props) => {
  const { BgImg, introImg, msgBod, msgHead } = props;
  return (
    <div className='img'>
      {/* <img src='{BgImg}' alt='' /> */}
      <div
        style={{
          //   backgroundImage: `url(${BgImg})`,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          height: '100vh',
        }}
        className='bg-img'
      >
        <div className='msg-box'>
          <img src={introImg} alt='' />
          <h1>{msgHead}</h1>
          <h3>{msgBod}</h3>
          <button className='home-button'>Start Planning</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImg;
