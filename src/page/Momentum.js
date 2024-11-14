
// import '../css/momentum.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';
import '../css/momentum.css';

const Momentum = () =>{
    const lists = {
        titleH1: 'Momentum - To Do List',
        titleSpan: 
        '일정 관리와 현재 위치 날씨 조회, 주요 사이트 북마크 기능을 제공하는 프로젝트입니다.',
        skill: [
            'IDE : Visual Studio Code',
            '협업 관리 툴 : Git',
            'HTML, scss , JavaScript',
            'OpenWeather API',
        ]
    };
    return (
        <div id='project-component'>
            <Commom listData={lists}/>

            <div id='momentum-component'>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/momentum/thumbnail.png`} alt="" />
                    <span>OpenWeather API를 사용하여, 해당 지역의 위치와 날씨를 보여주도록 하였습니다.</span>
                </div>
                {/* <div>
                    <img src={`${process.env.PUBLIC_URL}/images/naver/실시간예보.png`} alt="" />
                    <span>설명?</span>
                </div> */}

                </div>
            <div className='goToLinks'>
                <div className='goGithub'>
                    <button><a href="https://min-ji97.github.io/momentum/" target="_blank">해당 페이지로 이동</a></button>            
                </div>
                <div className='goPage'>
                    <button><a href="https://github.com/min-ji97/momentum" target="_blank">GitHub로 이동하기</a></button>
                </div>
            </div>
        </div>
    )
}

export default Momentum;