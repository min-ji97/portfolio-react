
import React, { useEffect } from 'react';
import { Link as RouterLink , useLocation , useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './css/headerNav.css';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse , faUserLarge , faFolderOpen ,faAddressBook , faArrowLeft } from "@fortawesome/free-solid-svg-icons";



function HeaderNav({setIsHovering, isRoutePage}) { 

  const location = useLocation();
  const navigate = useNavigate();

  const goToBack = () =>{
    navigate(-1);
  }
  useEffect(()=>{
    
    const returnIcon = document.querySelector(".return--projects");

    if( location.pathname.startsWith("/project")){
      returnIcon.style.display = "block";
    }else{
      returnIcon.style.display = "none";
    }

  },[location]);


  useEffect(()=>{

    const navTag = document.querySelectorAll('#header-container .header-nav svg');
    

   

    navTag.forEach( item =>{
      item.addEventListener('mouseenter',() => { setIsHovering('navHover') });
      item.addEventListener('mouseleave',()=>{setIsHovering(null);})
    }); 







    return()=>{
      navTag.forEach( item =>{
        item.removeEventListener('mouseenter',() => { setIsHovering('navHover') });
        item.removeEventListener('mouseleave',() => { setIsHovering(null) });
      }); 
    }
  },[setIsHovering]);

  return (
    <div id='header-container'>
      
        

        <div className='header-nav'>

          <div className='return--projects'>
            <a onClick={goToBack}>
              <FontAwesomeIcon className="icon" icon={faArrowLeft} />
            </a>
          </div>

          <div>
            <RouterLink to = "/Main#main-container">
              <FontAwesomeIcon className="icon" icon={faHouse} />
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/Main#introduce">
              <FontAwesomeIcon className="icon" icon={faUserLarge} />
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/Main#project">
              <FontAwesomeIcon className="icon" icon={faFolderOpen} />
            </RouterLink>
          </div>
          <div> 
            <RouterLink to="/Main#contact">
              {/* contact */}
              <FontAwesomeIcon className="icon" icon={faAddressBook} />
            </RouterLink>
          </div>
        </div>
      
    </div>
  );
} 

export default HeaderNav;
