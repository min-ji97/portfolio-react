import React, { useEffect, useRef } from 'react';
import './css/cursor.css';
import styled from 'styled-components';

import { useLocation } from "react-router-dom";


const NewCursor = styled.div`
  position: absolute;

  /* background-color: rgba(194, 193, 194, 0.219); */
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  /* mix-blend-mode: difference; */

  mix-blend-mode: ${ ({isHovering}) =>
    (isHovering === 'btnHover') ? "none" : "difference" };
  border-radius: 45px;
  border: 1px solid white;
  z-index: 2;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.2s;

  transform: ${({ isHovering }) => 
    (isHovering === 'spanHover' ) 
      ? "scale(5)" 
      : (isHovering === 'btnHover')
      ? "scale(3)" 
      : "scale(1)"
  };


  /* background-color:  ${({ isHovering }) => (isHovering ? "rgb(233, 233, 233)" : "rgba(194, 193, 194, 0.219)")}; */
  /* border-color: ${({ isHovering }) => (isHovering ? 'rgb(196, 0, 0)':'rgb(255, 245, 245)' )} ; */

  background-color: ${ ({ isHovering }) => 
    (isHovering === 'spanHover') ? "rgb(233, 233, 233)" 
      :(isHovering === 'btnHover') ? "white" 
      : "rgba(194, 193, 194, 0.219)"
  
  };

  border-color: ${ ({ isHovering }) => 
    (isHovering === 'spanHover') ? "rgb(196, 0, 0)" 
      :(isHovering === 'btnHover') ? "black" 
      : "rgb(255, 245, 245)"
  
  };



  opacity: ${ ({isHovering}) => (isHovering === 'navHover' ? 0 : 1 ) };
  transition: transform 0.3s ease; 
  

 &::before {
    content: "Click";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: black; */
    
    color: black;
    font-size: 7px;
    font-weight: bold;
    padding-left: 1px;
    line-height: 16px;
    
    opacity: ${ ({isHovering}) => (isHovering === 'btnHover' ? 1 : 0 ) };
    /* transform: scale(2); */
    transition: opacity 0.3s ease-in-out;
  }

  
 & {
    content: "";
    /* position: absolute; */
    /* top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none; */
    /* background-color: white; */
    /* color: blue;
    font-size: 6px;
    font-weight: bold;
    padding-left: 2px;
    line-height: 16px; */
    opacity: ${ ({isHovering}) => (isHovering === 'navHover' ? 0 : 1 ) };

    
    /* transition: opacity 0.3s ease-in-out;*/
  } 

`



const CustomCursor = ({isHovering}) =>{

  const mouseRef = useRef(null);
  const location = useLocation();

  useEffect(()=>{
    const onMouseMove = (e) =>{

      // const span = document.querySelector('#introduce');
      if(mouseRef.current){
        mouseRef.current.style.left = e.pageX + "px";
        mouseRef.current.style.top = e.pageY  + "px";
      }
    }
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
     
    };
  },[]);

  useEffect(()=>{

    return () =>{
      if (mouseRef.current) {
        mouseRef.current.style.left = "0px";
        mouseRef.current.style.top = "0px";
      }
    }
  },[location]);
  
    return (
        <div>
          {/* <div id='cursor' ref={mouseRef}></div> */}

          <NewCursor  ref={mouseRef} isHovering={isHovering}/> 
      
    
        </div>
    )
}

export default CustomCursor;

/*
<div id="cursor" ref={mouseRef} isHovering={isHovering}
          style={{
            transform : isHovering? "scale(4)": "scale(1)",
            transition: isHovering? "scale ease-in 2s": "0"
          }}> </ div>
*/ 




/**
 * 
 * 
 *  수정 전 컴포넌트! 
 *  위에는 styled-components를 적용시켜 보려 합니닷
 * 
 * 

const CustomCursor = () =>{

  const mouseRef = useRef(null);


  useEffect(()=>{
    const onMouseMove = (e) =>{
    

      const span = document.querySelector('#introduce');
      
      
      if(mouseRef.current){
        mouseRef.current.style.left = e.pageX + "px";
        mouseRef.current.style.top = e.pageY  + "px";
        // console.log('여기 들어와?');
      }
    }
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  },[]);

  
    return (
        <div>
          <div id='cursor' ref={mouseRef}></div>
        </div>
    )
}

export default CustomCursor;
 */