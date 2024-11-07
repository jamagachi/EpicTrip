import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Planner from './pages/Planner';
import CreateTrip from './pages/CreateTrip';
import ViewTrips from './pages/ViewTrips';
import './App.css';

const App = () => {
  return (
    <div className='router'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-trips' element={<CreateTrip />} />
        <Route path='/view-trips' element={<CreateTrip />} />
        <Route path='/planner' element={<Planner />} />
      </Routes>
    </div>
  );
};

export default App;
