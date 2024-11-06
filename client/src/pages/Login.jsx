import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <h1 className='login-title'>Login Page</h1>
      <form action='/login' method='post'>
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <input type='button' value='Submit' />
      </form>
    </div>
  );
};

export default Login;
