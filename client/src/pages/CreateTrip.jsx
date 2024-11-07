// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const CreateTrip = ({ setTripInfo }) => {
//   const cache = {
//     trip: '',
//     city: '',
//     country: '',
//     'start-date': '',
//     'end-date': '',
//   };

//   const newTrip = async () => {
//     const res = await httpClient.get('http://localhost:3000/api/hi');
//   };

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const httpClient = axios.create();
//         // const res = await httpClient.get('http://localhost:3000/api/hi');
//         const res = await axios.get('/api/hi');
//         setData(res.data);
//         console.log('axios test', res);
//       } catch (err) {
//         console.log('Err fetching data from frontend: ', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   console.log('Res Data: ', data);

//   const handleSubmitButton = (e) => {
//     e.preventDefault();
//     console.log('Create New Trip Submitted');
//     console.log('Data: ', data);
//   };

//   const handleFormInfo = (e) => {
//     // const trip = e.target.value;
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value, // Dynamically update each field based on its name
//     }));
//     console.log('formHandler val: ', e.target.value);
//   };

//   return (
//     <div className='create-trip'>
//       <h1 className='create-trip-title'>Plan A New Trip</h1>
//       <form onSubmit={handleSubmitButton}>
//         <h3>What's Your EpicTrip Called?</h3>
//         <input type='text' name='trip' placeholder='Trip Title' />
//         <br />
//         <h3>Where Are You Going?</h3>
//         <input type='text' name='city' placeholder='City' />
//         <input type='text' name='country' placeholder='Country' />
//         <br />
//         <h3>What Are Your Travel Dates?</h3>
//         <input type='date' name='start-date' placeholder='Start Date' />
//         <input type='date' name='end-date' placeholder='End Date' />
//         <br />
//         <button type='submit'>Submit</button>
//       </form>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h3>Data from server:</h3>
//           <p>{data ? JSON.stringify(data) : 'No data available'}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateTrip;

import React, { useState } from 'react';
import axios from 'axios';
// import './CreateTrip.css';

const CreateTrip = ({ setTripInfo }) => {
  // Local form state to handle controlled inputs
  const [formData, setFormData] = useState({
    trip: '',
    city: '',
    country: '',
    'start-date': '',
    'end-date': '',
  });

  const handleFormInfo = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);
    setTripInfo(updatedFormData); // Update parent state via passed-in prop
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await axios.post('/api/create-trip', formData);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='create-trip'>
      <h1 className='create-trip-title'>Plan A New Trip</h1>
      <form onSubmit={handleSubmitButton}>
        <h3>What's Your EpicTrip Called?</h3>
        <input
          type='text'
          name='trip'
          placeholder='Trip Title'
          value={formData.trip}
          onChange={handleFormInfo}
        />
        <br />
        <h3>Where Are You Going?</h3>
        <input
          type='text'
          name='city'
          placeholder='City'
          value={formData.city}
          onChange={handleFormInfo}
        />
        <input
          type='text'
          name='country'
          placeholder='Country'
          value={formData.country}
          onChange={handleFormInfo}
        />
        <br />
        <h3>What Are Your Travel Dates?</h3>
        <input
          type='date'
          name='start-date'
          placeholder='Start Date'
          value={formData['start-date']}
          onChange={handleFormInfo}
        />
        <input
          type='date'
          name='end-date'
          placeholder='End Date'
          value={formData['end-date']}
          onChange={handleFormInfo}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
      {/* <div className='test'>
        {formData !== undefined ? <p>{formData}</p> : null}
      </div> */}
    </div>
  );
};

export default CreateTrip;
