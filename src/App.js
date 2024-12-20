import React , {useState} from 'react';

import { BrowserRouter , Routes, Route} from 'react-router-dom';

import Main from './Main';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import CustomCursor from './CustomCursor';


// pages 
import Momentum from './page/Momentum';
import Portfolio from './page/Portfolio';
import Naver from './page/Naver';
import Starbucks from './page/Starbucks';
import PetBoard from './page/PetBoard';
import Noorida from './page/Noorida';


const App = () =>{

    // const location = useLocation();
    const [isHovering, setIsHovering] = useState(null);
    const [isRoutePage, setIsRoutePage] = useState(null);

    // console.log("?",location);

    // console.log(path);


    return(
        
        <div id="app-container">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <CustomCursor isHovering={isHovering} />
                <HeaderNav setIsHovering={setIsHovering} isRoutePage={isRoutePage}/>
                <div>
                <Routes>
                    <Route path='/' element={<Main setIsHovering={setIsHovering}/>} />
                    <Route path='/Main' element={<Main setIsHovering={setIsHovering} />} />
                   
                    <Route path='/Footer' element={<Main setIsHovering={setIsHovering}/>} />

                    {/* 다른 페이지들! */}
                    <Route path='/project/momentum' element={<Momentum />} />
                    <Route path='/project/portfolio' element={<Portfolio />} />
                    <Route path='/project/naver' element={<Naver />} />
                    <Route path='/project/starbucks' element={<Starbucks />} />
                    <Route path='/project/petBoard' element={<PetBoard />} />
                    <Route path='/project/noorida' element={<Noorida />} />
                </Routes>
                <Footer/>
                </div>
            
                </BrowserRouter>
        </div>
        
    )
}


export default App;