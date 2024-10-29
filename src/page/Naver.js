
// import '../css/naver.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';
import '../css/naver.css';

const Naver = () =>{
    const lists = {
        titleH1: 'Naver 클론코딩',
        titleSpan: '',
      
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

                <div id='naver-component'>


                </div>

            <hr />
            <div className='gotoLinks'>
                <div className='goGithub'>
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