import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route , Navigate } from 'react-router-dom';

import './css/index.css';
import ScrollToTop from './ScrollToTop';
import Main from './Main';
import HeaderNav from './HeaderNav';
import Footer from './Footer';



// pages 
import Momentum from './page/Momentum';
import Portfolio from './page/Portfolio';
import Naver from './page/Naver';
import Starbucks from './page/Starbucks';
import PetBoard from './page/PetBoard';
import Noorida from './page/Noorida';




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
              <Route path='/momentum' element={<Momentum />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/naver' element={<Naver />} />
              <Route path='/starbucks' element={<Starbucks />} />
              <Route path='/petBoard' element={<PetBoard />} />
              <Route path='/noorida' element={<Noorida />} />
          </Routes>
          <Footer/>
        </div>
      
    </BrowserRouter>
  </div>
);


// reportWebVitals();
