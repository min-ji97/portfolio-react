
// import '../css/portfolio.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';

const Portfolio = () =>{
    const lists = {
        titleH1: 'Vue를 이용한 CRUD 반려동물 게시판',
        titleSpan: 
        '동물을 좋아해, 자신의 반려동물을 자랑하고 반려인들끼리 필요한 정보들을 공유하거나 얻을 수 있는 장소를 만들어 보고 싶었습니다',
        skill: [
            'IDE : Visual Studio Code',
            'Database : MySQL',
            '협업 관리 툴 : Git',
            'Client :  NPM / WebPack / Vue.js /Vuex',
            'Server : Node.js / Express.js / MySQL',
            'API : Axios'        
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

export default Portfolio;