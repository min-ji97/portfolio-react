
// import '../css/noorida.css';
import React from 'react';
import Commom from './Commom';

const Noorida = () =>{
    const lists = {
        titleH1: '졸업작품: 누리다',
        titleSpan: 
        '위치기반 서비스를 이용한 소셜네트워크 서비스 누리다',
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

export default Noorida;