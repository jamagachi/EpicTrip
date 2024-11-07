import React from 'react';

const PlannerNavbar = () => {
  return (
    <div className='planner-navbar'>
      <nav className='nav'>
        <a href='/' className='planner-navbar-title'>
          Plan Trip
        </a>
        <ul>
          <li>
            <a href='/view-trips'>View Trips</a>
          </li>
          <li>
            <a href='/create-trip'>Create Trip</a>
          </li>
          {/* <li> */}
          {/* <a href='/resources'>Resources</a> */}
          {/* </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default PlannerNavbar;
