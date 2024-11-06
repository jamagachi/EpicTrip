import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Planner from './components/Planner';
import '../public/style.css';

const App = () => {
  return (
    <div className='router'>
      <main>
        <h1>Hi</h1>
        <h2>Hello</h2>
        <Planner />
        {/* <Routes> */}
        {/* <Route path='/' element={<Navbar />} /> */}
        {/* <Route path='/planner' element={<Planner />} />
        </Routes> */}
      </main>
    </div>
  );
};

export default App;
