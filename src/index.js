import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import Main from './Main';
import HeaderNav from './HeaderNav';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id='index-container'>
    <HeaderNav/>
    <div>
      <Main/>
      <Footer/>
    </div>
    
  </div>
);


// reportWebVitals();
