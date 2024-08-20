import React, { useEffect, useRef } from 'react';
import './css/cursor.css';
import styled from 'styled-components';



// 이거 사용안해도 될거같은걸...?
const NewCursor = styled.div`
  position: absolute;

  background-color: green;

  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  mix-blend-mode: difference;
  border-radius: 45px;
  border: 1px solid rgb(189, 164, 164);
  z-index: 2;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.2s;

  transform: ${({ isHovering }) => (isHovering ? "scale(5)" : "scale(1)")};
  transition: transform 0.3s ease; 
  
 &::before {
    content: "Click!";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    color: blue;
    font-size: 6px;
    font-weight: bold;
    opacity: 0; 
    transition: opacity 0.3s ease-in-out;
}

${ (isHovering) =>
  
  isHovering === 'btnHover' && 
  `
   &::before{
    opacity: 1 !important;
  }
  
  `
   

}

}

`



const CustomCursor = ({isHovering}) =>{

  const mouseRef = useRef(null);


  useEffect(()=>{
    const onMouseMove = (e) =>{
    
      
      const span = document.querySelector('#introduce');
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

  
    return (
        <div>
          {/* <div id='cursor' ref={mouseRef}></div> */}

          <NewCursor  ref={mouseRef} isHovering={isHovering}
          style={{
            // transform : isHovering==='spanHover'? "scale(4)": "scale(1)",
            // transition: "transtorm ease-in 2s",

            // transform : isHovering==='btnHover'? "scale(4)": "scale(1)",
            // transition: isHovering==='btnHover'? "scale ease-in 2s": "0"
          }} /> 
         {console.log('이즈호버링 머냐!',isHovering)}
    
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