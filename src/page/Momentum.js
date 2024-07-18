
// import '../css/momentum.css';
import React from 'react';
import Commom from './Commom';

const Momentum = () =>{
    const lists = {
        titleH1: 'Momentum - To Do List',
        titleSpan: 
        'ㅎ',
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

export default Momentum;