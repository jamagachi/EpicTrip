import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Planner from './components/Planner';
import './stylesheets/styles.css';

const App = () => {
  return (
    <div className='router'>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planner' component={<Planner />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
