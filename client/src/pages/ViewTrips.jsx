import React from 'react';

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
            <p>Current Trip #1</p>
          </li>
          <li>
            {' '}
            <p>Current Trip #2</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className='upcoming-trips'>
        <h3>Upcoming Trips:</h3>
        <ul>
          <li>
            {' '}
            <p>Upcoming Trip #1</p>
          </li>
          <li>
            {' '}
            <p>Upcoming Trip #2</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className='past-trips'>
        <h3>Past Trip:</h3>
        <ul>
          <li>
            {' '}
            <p>Past Trip #1</p>
          </li>
          <li>
            {' '}
            <p>Past Trip #2</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ViewTrips;
