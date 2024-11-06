import React from 'react';
import { Link } from 'react-router-dom';

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
      {/* <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/planner'>Planner</Link>
      </nav> */}
    </div>
  );
};

export default Navbar;
