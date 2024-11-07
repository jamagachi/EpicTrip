import React from 'react';
import BackgroundImg from '../components/BackgroundImg';
import loginBG from '../../public/assets/travel2.png';
import './Login.css';

const Login = () => {
  // const [login, setLogin] = useState({
  //   username: '',
  //   password: '',
  // });

  // const handleFormInfo = (e) => {
  //   const { name, value } = e.target;
  //   const updatedFormData = {
  //     ...login,
  //     [name]: value,
  //   };

  //   setLogin(updatedFormData);
  // };

  // const handleSubmitButton = async (e) => {
  //   e.preventDefault();
  //   console.log('Login Data:', login);
  //   try {
  //     const response = await axios.post('/api/login', login);
  //     console.log('Server response:', response.data);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };
  const loginContent = (
    <div className='login-container'>
      <h1 className='login-title'>Let's Start Planning!</h1>
      <form
        action='/login'
        method='post'
        className='login-form'
        // onSubmit={handleSubmitButton}
      >
        <input
          type='text'
          name='username'
          placeholder='username'
          className='login-input'
          // value={login.username}
          // onChange={handleFormInfo}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          className='login-input'
          // value={login.password}
          // onChange={handleFormInfo}
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
