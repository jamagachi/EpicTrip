import React from 'react';
import BackgroundImg from '../components/BackgroundImg';
import './TripDash.css';
import tripBG from '../../public/assets/travel1.png';

const TripDash = () => {
  const tripName = 'Camp Codesmith: Fall Fun';
  const startDate = '11/23/24';
  const endDate = '11/30/24';
  const city = 'Portland';
  const country = 'Jamaica';

  //   const newTrip = async () => {
  //     const res = await httpClient.get('http://localhost:3000/api/dashboard');
  //   };

  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get('/api/hi');
  //         setData(res.data);
  //       } catch (err) {
  //         console.log('Err fetching data from frontend: ', err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className='trip-dashboard'>
      <div
        className='dash-header'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${tripBG})`,
        }}
      >
        <h1>{tripName}</h1>
      </div>
      {/* {data} */}
    </div>
  );
};

export default TripDash;
