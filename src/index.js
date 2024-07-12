import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import Main from './Main';
import HeaderNav from './HeaderNav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id='index-container'>
    <HeaderNav/>
    <Main/>
  </div>
);


// reportWebVitals();
