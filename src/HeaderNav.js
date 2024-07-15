
import Main from './Main';
import './css/headerNav.css';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse , faUserLarge , faFolderOpen ,faAddressBook} from "@fortawesome/free-solid-svg-icons";

// faAddressBook

function HeaderNav() {
  return (
    <div id='header-container'>
     
        <div className='header-nav'>
          <div>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faHouse} />
            </a>
          </div>
          <div>
            <a href="#Main">
              <FontAwesomeIcon className="icon" icon={faUserLarge} />
            </a>
          </div>
          <div>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFolderOpen} />
            </a>
          </div>
          <div> 
            <a href="#">
              {/* contact */}
              <FontAwesomeIcon className="icon" icon={faAddressBook} />
            </a>
          </div>
        </div>
      
    </div>
  );
}

export default HeaderNav;
