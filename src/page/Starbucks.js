// import '../css/starbucks.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';


const Starbucks = () =>{
    const lists = {
        titleH1: 'starbucks 클론코딩',
        titleSpan: 
        'html, css , javascript의 기본기를 좀 더 탄탄히 하기 위해 만들었습니다.'
        +'swiper 슬라이더와 gsap를 익히는데 도움이 되었습니다.',
        skill: [
            'IDE : Visual Studio Code',
            '협업 관리 툴 : Git',
            'HTML, CSS , JavaScript'      
        ]
    };
    return (
        <div id='project-component'>
            <Commom listData={lists}/>

            <div>

            <hr />
                <div className='goGithub'>
                    <button><a href="https://github.com/min-ji97/pet_board" target="_blank">GitHub로 이동하기</a></button>
                </div>
            </div>
        </div>
    )
}

export default Starbucks;