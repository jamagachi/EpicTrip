import React from 'react';
import BackgroundImg from '../components/Background';
import BgImg from '../../public/assets/travel1.png';
import introImg from '../../public/assets/intro-pic.png';

const Home = () => {
  const msgHead = 'Welcome to EpicTrip!';
  const msgBod =
    "Your adventure starts here! Whether you're dreaming of new destinations or revisiting old favorites, EpicTrip makes it easy to gather all your travel plans in one place. Save everything from ticket links to festival dates, map out local gems, and customize each trip with tailored insights. With EpicTrip, you're not just planning a trip—you’re creating an epic journey filled with memories to last a lifetime.";
  return (
    <div className='home'>
      <BackgroundImg
        msgBod={msgBod}
        msgHead={msgHead}
        bgImg={BgImg}
        introImg={introImg}
      />
      <div className='home-intro'>
        {/* <p>One app for all your travel plans!</p> */}
      </div>
      <div className='photo-gallery'></div>
    </div>
  );
};

export default Home;
