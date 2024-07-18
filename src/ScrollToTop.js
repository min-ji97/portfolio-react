
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';


const ScrollToTop = (props) =>{
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])
    return (
        <div>
            {props.children}
        </div>
    )
};

export default ScrollToTop;