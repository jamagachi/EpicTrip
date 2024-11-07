import React from 'react';
import BackgroundImg from '../components/BackgroundImg';
import loginBG from '../../public/assets/travel2.png';
import './Login.css';

const Login = () => {
  const loginContent = (
    <div className='login-container'>
      <h1 className='login-title'>Let's Get Planning!</h1>
      <form action='/login' method='post' className='login-form'>
        <input
          type='text'
          name='username'
          placeholder='username'
          className='login-input'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          className='login-input'
        />
        {/* <input type='button' value='Submit' className='login-button' /> */}
      </form>
      <button className='login-button'>Log In</button>
    </div>
  );
  return (
    <div className='login'>
      <BackgroundImg bgImg={loginBG} content={loginContent} />
    </div>
  );
};

export default Login;
