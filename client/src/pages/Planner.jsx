import React from 'react';
import { useState, useEffect } from 'react';
import ViewTrips from './ViewTrips';
import CreateTrip from './CreateTrip';
import TripDash from './TripDash';
import PlannerNavbar from '../components/PlannerNavbar';
import './Planner.css';
// import { useParams } from 'react-router-dom';

const plannerTools = ['dashboard', 'view', 'create']; // Change this to an obj later for easy additional tools and referenceing in the ternary operators of the planner-page div below

const Planner = () => {
  const [plannerTool, setPlannerTool] = useState(plannerTools[0]);
  const [tripInfo, setTripInfo] = useState({});

  return (
    <div className='planner'>
      <div className='planner-sidebar'>
        <PlannerNavbar setPlannerTool={setPlannerTool} />
      </div>
      <div className='planner-page'>
        {plannerTool === plannerTools[0] ? <TripDash /> : null}
        {plannerTool === plannerTools[1] ? <ViewTrips /> : null}
        {plannerTool === plannerTools[2] ? (
          <CreateTrip setTripInfo={setTripInfo} />
        ) : null}
      </div>
    </div>
  );
};

export default Planner;
