import React , { useEffect , useRef } from 'react';
import { useLocation } from 'react-router-dom';
 
import './css/footer.css';


import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

const Footer = () =>{

    const footerRef = useRef(null);
    const location = useLocation();

    useEffect(()=>{
        if(location.hash === '#footer'){
            footerRef.current.scrollIntoView({ behavior : 'smooth' });
        }
    },[location])
    return (
        <footer ref={footerRef}>
            <div className='footer-nav'>
                <div className='git'>
                    <a href="https://github.com/min-ji97" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                </div>
                <div className='blog'>
                    <a href="https://min-coding.tistory.com/" target='_blank'>
                        <FontAwesomeIcon className="icon" icon={faBlog} />
                    </a>
                </div>
            </div>
            <div className='footer-rights'>
                <span>2024 joeMinJi - All rights reserved</span>
            </div>

        </footer>
    )
}

export default Footer;