
// import '../css/portfolio.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';

const Portfolio = () =>{
    const lists = {
        titleH1: 'portfolio',
        titleSpan: 
        '리액트를 이용하여 포트폴리오 사이트를 제작하였습니다.',
        skill: [
            'IDE : Visual Studio Code',
            '협업 관리 툴 : Git',
            'HTML, scss , JavaScript, React',
      
        ]
    };
    return (
        <div id='project-component'>
            <Commom listData={lists}/>

            <div>



            <hr />
                <div className='goGithub'>
                    <button><a href="https://github.com/min-ji97/portfolio-react" target="_blank">GitHub로 이동하기</a></button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;