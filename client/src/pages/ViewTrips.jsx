import React from 'react';
import './ViewTrips.css';

const ViewTrips = () => {
  return (
    <div className='view-trips'>
      <h1>My EpicTrips Planner</h1>
      <br />
      <div className='current-trip'>
        <h3>Current Trip:</h3>
        <ul>
          <li>
            {' '}
            <p>Camp Codesmith: Fall Fun</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className='upcoming-trips'>
        <h3>Upcoming Trips:</h3>
        <ul>
          <li>
            {' '}
            <p>2024 Christmas Cabin Trip</p>
          </li>
          <li>
            {' '}
            <p>2025 Family Reunion</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className='past-trips'>
        <h3>Past Trip:</h3>
        <ul>
          <li>
            {' '}
            <p>2023 Staycation</p>
          </li>
          <li>
            {' '}
            <p>2022 Caribbean Cruise</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ViewTrips;
