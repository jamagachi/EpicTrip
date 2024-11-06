// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App'; // Assuming your root component is in App.js

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
