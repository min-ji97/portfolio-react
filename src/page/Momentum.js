
// import '../css/momentum.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';
import '../css/momentum.css';

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

            <div id='momentum-component'>


            </div>
            <div className='goToLinks'>
                <div className='goGithub'>
                    <button><a href="https://min-ji97.github.io/momentum/" target="_blank">해당 페이지로 이동   </a></button>            
                </div>
                <div className='goGithub'>
                    <button><a href="https://github.com/min-ji97/momentum" target="_blank">GitHub로 이동하기</a></button>
                </div>
            </div>
        </div>
    )
}

export default Momentum;