
// import '../css/naver.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';
import '../css/naver.css';

const Naver = () =>{
    const lists = {
        titleH1: 'Naver - Clone Coding',
        titleSpan: '레이아웃 연습을 위해 네이버를 클론 코딩한 프로젝트입니다. 날씨와 달력 기능은 실제처럼 구현하였습니다.',
      
        skill: [
            'IDE : Visual Studio Code',
            '협업 관리 툴 : Git',
            'HTML, CSS , JavaScript',
            '기상청 단기 예보 조회 서비스 API'
        ]
    };
    return (
        <div id='project-component'>
            <Commom listData={lists}/>

            <div>

                <div id='naver-component'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/naver/전체이미지.png`} alt="" />
                        {/* <span>설명</span> */}
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/naver/실시간예보.png`} alt="" />
                        <span>단기예보 조회 서비스 API를 이용해 실시간으로 날씨를 구현하도록 하였습니다.</span>
                    </div>
                </div>

            <hr />
            <div className='goToLinks'>
                <div className='goPage'>
                    <button><a href="https://min-ji97.github.io/Naver_clone/" target="_blank">해당 페이지로 이동</a></button>
                </div>
                <div className='goGithub'>
                    <button><a href="https://github.com/min-ji97/Naver_clone" target="_blank">GitHub로 이동하기</a></button>
                </div>
            </div>
                
            </div>
        </div>
    )
}

export default Naver;