import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='site-title' to='/'>
        <img id='logo' src={logo} alt='' />
      </Link>
      <nav className='nav'>
        <Link className='route-links' to='/login'>
          Login
        </Link>
        <Link className='route-links' to='/planner'>
          Planner
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
