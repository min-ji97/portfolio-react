
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './css/headerNav.css';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse , faUserLarge , faFolderOpen ,faAddressBook} from "@fortawesome/free-solid-svg-icons";

// faAddressBook

function HeaderNav({setIsHovering, isRoutePage}) { 

  useEffect(()=>{
    const navTag = document.querySelectorAll('#header-container .header-nav svg');
    const returnIcon = document.querySelector(".return--projects");

    navTag.forEach( item =>{
      item.addEventListener('mouseenter',() => { setIsHovering('navHover') });
      item.addEventListener('mouseleave',()=>{setIsHovering(null);})
    }); 

    if(isRoutePage){
      returnIcon.style.display = "block";
    }


    return()=>{
      navTag.forEach( item =>{
        item.removeEventListener('mouseenter',() => { setIsHovering('navHover') });
        item.removeEventListener('mouseleave',() => { setIsHovering(null) });
      }); 
    }
  },[setIsHovering]);

  return (
    <div id='header-container'>
      
        <div className='return--projects'>
          <RouterLink to="/Main#project">
            아이콘
          </RouterLink>
        </div>

        <div className='header-nav'>
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
            <RouterLink to="/Footer#footer">
              {/* contact */}
              <FontAwesomeIcon className="icon" icon={faAddressBook} />
            </RouterLink>
          </div>
        </div>
      
    </div>
  );
} 

export default HeaderNav;
