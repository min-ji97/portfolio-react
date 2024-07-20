
// import '../css/naver.css';
import React from 'react';
import Commom from './Commom';

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



            <hr />
                <div className='goGithub'>
                    <button><a href="https://github.com/min-ji97/pet_board" target="_blank">GitHub로 이동하기</a></button>
                </div>
            </div>
        </div>
    )
}

export default Naver;