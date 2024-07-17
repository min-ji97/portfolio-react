import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route , Navigate } from 'react-router-dom';

import './css/index.css';
import Main from './Main';
import HeaderNav from './HeaderNav';
import Footer from './Footer';


import Commom  from './page/Commom';
import PetBoard  from './page/PetBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id='index-container'>
    <BrowserRouter >
      <HeaderNav/>
      <div>
        <Routes>
            <Route path='/' element={<Main />} />
              <Route path='/Main' element={<Main />} />
              <Route path='/Footer' element={<Main />} />
            {/* 다른 페이지들! */}
            <Route path='/petBoard' element={<PetBoard />} /> 
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  </div>
);


// reportWebVitals();
