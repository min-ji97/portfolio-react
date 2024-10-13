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

    setTimeout(typeWriter, 5500);
   

    // 타이핑
    const homeIntroTag = document.querySelector(".home--intro span:nth-of-type(1)");

    const homeIntroCursor = document.querySelector(".intro--cursor");

    setTimeout(()=>{
        homeIntroCursor.textContent += '.';
    },3500);
    



    const introSpanArray = [
        "신입 개발자로서 고객들이 쉽게 사용할 수 있는 아름답고",
        "기능적인 웹 애플리케이션을 만드는 데 기여하고 싶습니다.",
        "끊임없이 배우고 성장해 나가는 개발자가 되도록 하겠습니다."
    ];

    let textNum = 0;
    let speed = 100; // 글자 타이핑 속도 (ms 단위)
    let currentLine = 0; // 몇번째 줄인지

 

    function typeWriter() {
        if (currentLine < introSpanArray.length) {
            let currentText = introSpanArray[currentLine]; // 현재 줄의 텍스트

            if (textNum < currentText.length) {
                // 현재 줄에서 한 글자씩 타이핑
                homeIntroTag.innerHTML += currentText.charAt(textNum);
                textNum++;
                setTimeout(typeWriter, speed);
            } else {

                // 한 줄 타이핑 완료 시 다음 줄로 이동
                if( currentLine !== introSpanArray.length - 1 ){ // 마지막 줄이 아닌 경우에만 줄바꿈
                    homeIntroTag.innerHTML += "<br>"; // 줄바꿈
                }
                currentLine++; // 다음 줄로 이동
                textNum = 0; // 다음 줄의 첫 글자부터 시작
                setTimeout(typeWriter, speed); // 다음 줄 타이핑 시작
            }
        }
    }

}


export default mainEvent;