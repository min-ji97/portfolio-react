import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




const mainEvent = () =>{

    let homeTitleDiv = document.querySelectorAll('.home--title div:first-child , .home--title div, .home--intro h1:first-child, .home--intro h2');

    let homeSubSpan = document.querySelectorAll('.home--intro span:nth-of-type(1), .home--intro span:nth-of-type(2) ,.home--intro span:nth-of-type(3) ');

    console.log(homeSubSpan);  // 이걸로 타이핑 효과를 줄 예정!!!

    // gsap.to(요소, 지속시간, 옵션);
    
    homeTitleDiv.forEach(( item)=>{
        gsap.set(item,{opacity: 0});
    });
    homeTitleDiv.forEach(( item , index )=>{
        gsap.to(item,{
            duration: 1,
            delay: (index + 1) * 0.7,
            opacity: 1
        });
    });






    let canvas = document.querySelector('.home--canvas');
    let ctx = canvas.getContext('2d');


    // console.log(canvas);







}


export default mainEvent;