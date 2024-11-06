import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Planner from './pages/Planner';
import CreateTrip from './pages/CreateTrip';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/create-trip', element: <CreateTrip /> },
  { path: '/planner', element: <Planner /> },
]);

const App = () => {
  return (
    <div className='router'>
      <Navbar />
      <RouterProvider className='routes' router={router} />
    </div>
  );
};

export default App;
