import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Planner from './components/Planner.jsx';
import '../public/style.css';

const App = () => {
  return (
    <div className='router'>
      <main>
        <h1>Test</h1>
        <div className='App'>
          <NavBar />
        </div>
        <div className='content'></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planner' element={<Planner />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
