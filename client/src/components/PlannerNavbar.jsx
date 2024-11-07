import React from 'react';
import './PlannerNavbar.css';

const PlannerNavbar = ({ setPlannerTool }) => {
  return (
    <div className='planner-navbar'>
      <h1>My Planner</h1>
      <nav className='planner-nav'>
        <p
          id='trip-dash'
          className='planner-tools'
          onClick={() => setPlannerTool('dashboard')}
        >
          Dashboard
        </p>
        <p
          id='view-trips'
          className='planner-tools'
          onClick={() => setPlannerTool('view')}
        >
          View Trips
        </p>
        <p
          id='create-trips'
          className='planner-tools'
          onClick={() => setPlannerTool('create')}
        >
          Create Trip
        </p>
      </nav>
    </div>
  );
};

export default PlannerNavbar;
