
// import '../css/noorida.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';

const Noorida = () =>{
    const lists = {
        titleH1: '졸업작품: 위치기반 서비스를 이용한 소셜네트워크 서비스 누리다 ',
        titleSpan: 
        'node.js와 vue를 이용하여 사용자의 위치 정보를 얻어와 '+
        '해당 위치의 웹 서비스를 제공하는 지역 소식 공유 서비스',
        
        skill: [
            '개발 인원 : 4명 ',
            '담당 : 프론트엔드',
            'IDE : Visual Studio Code',
            'Database : mariaDB',
            '협업 관리 툴 : Git',
            '클라우딩 컴퓨팅 : Amazon Web Service',
            'Client :  NPM WebPack Vue.js vuex',
            'Server : Node.js Knex.js Express.js mariaDB',
            'API : Axios',      
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

export default Noorida;