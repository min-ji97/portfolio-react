import React, { useEffect, useRef } from 'react';
import './css/cursor.css';

const CustomCursor = () =>{


    
  const mouseRef = useRef(null);
  /* 마우스 커서[s] */
  // var cursor = document.querySelector("#cursor");

  
  useEffect(()=>{
    const onMouseMove = (e) =>{
      // console.log('scrollX', e.screenX, e.screenY);
      // console.log(mouseRef.current);

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

  
   
      // console.log('scrollX', e.screenX, e.screenY);
      // cursor.style.color = e.screenY;
      // cursor.style.left = e.screenX;

      // cursor.style.left = e.clientX -25 + "px";
      // cursor.style.top = e.clientY -25  + "px";



    return (
        <div>
          <div id='cursor' ref={mouseRef}></div>
        </div>
    )
}

export default CustomCursor;