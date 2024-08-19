import React, { useEffect, useRef } from 'react';
import './css/cursor.css';
import styled from 'styled-components';


// import Main from './Main';


const NewCursor = styled.div`
  position: absolute;

  background-color: rgb(255, 186, 186);
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  mix-blend-mode: difference;
  border-radius: 45px;
  border: 1px solid rgb(255, 186, 186);
  z-index: 2;
  pointer-events: none;
  transform: translate(-50%, -50%);


`

  // transform: ${ (isHovering) ? scale(5) : scale(1) };

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

          <NewCursor ref={mouseRef} isHovering={isHovering}
          style={{
            transform : isHovering? "scale(1.5)": "scale(1)"
          }}/>
    
        </div>
    )
}

export default CustomCursor;






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