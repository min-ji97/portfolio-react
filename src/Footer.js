import './css/footer.css';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

const Footer = () =>{

    return (
        <footer>
            <div className='footer-nav'>
                <div className='git'>
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    <a href="https://github.com/min-ji97" target="_blank"></a>
                </div>
                <div className='blog'>
                    <FontAwesomeIcon className="icon" icon={faBlog} />
                    <a href="https://min-coding.tistory.com/" target='_blank'></a>
                </div>
            </div>
            <div className='footer-rights'>
                <span>2024 joeMinJi - All rights reserved</span>
            </div>

        </footer>
    )
}

export default Footer;