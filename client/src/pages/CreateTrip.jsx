import React from 'react';

const CreateTrip = () => {
  return (
    <div className='create-trip'>
      <h1 className='create-trip-title'>Plan A New Trip</h1>
      <form action='/create-trip' method='post'>
        <h3>What's Your EpicTrip Called?</h3>
        <input type='text' name='trip' placeholder='Trip Title' />
        <br />
        <h3>Where Are You Going?</h3>
        <input type='text' name='city' placeholder='City' />
        <input type='text' name='country' placeholder='Country' />
        <br />
        <h3>What Are Your Travel Dates?</h3>
        <input type='date' name='start-date' placeholder='Start Date' />
        <input type='date' name='end-date' placeholder='End Date' />
        <br />
        <input type='button' value='Submit' />
      </form>
    </div>
  );
};

export default CreateTrip;
