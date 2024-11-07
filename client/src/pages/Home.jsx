import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BackgroundImg from '../components/BackgroundImg';
import HomeBG from '../../public/assets/travel1.png';
import HomeContentImg from '../../public/assets/intro-pic.png';
import './Home.css';

const Home = () => {
  // console.log('Home Test');

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('/api');
  //       setData(res.data);
  //       console.log('newly set data: ', res.data);
  //     } catch (err) {
  //       console.log('Err fetching data from frontend: ', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // console.log('res data on home: ', data);

  const msgHead = 'Welcome to EpicTrip!';
  const msgBod =
    "Your adventure starts here! Whether you're dreaming of new destinations or revisiting old favorites, EpicTrip makes it easy to gather all your travel plans in one place. Save everything from ticket links to festival dates, map out local gems, and customize each trip with tailored insights. With EpicTrip, you're not just planning a trip—you’re creating an epic journey filled with memories to last a lifetime.";
  const homeContent = (
    <div className='msg-box'>
      <img src={HomeContentImg} alt='' />
      <h1>{msgHead}</h1>
      <h3>{msgBod}</h3>
      <button className='home-button'>
        <Link className='button-link' to='/login'>
          Start Planning
        </Link>
      </button>
    </div>
  );

  return (
    <div className='home'>
      <BackgroundImg bgImg={HomeBG} content={homeContent} />
    </div>
  );
};

export default Home;
