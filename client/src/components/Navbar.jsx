import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav'>
        <a href='/' className='site-title'>
          EpicTrip
        </a>
        <ul>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/create-trip'>CreateTrip</a>
          </li>
          <li>
            <a href='/planner'>Planner</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
