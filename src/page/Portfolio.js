
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

                <div>
                    <h1>PC 버전</h1>
                    <video width="800px" height="450px" src={`${process.env.PUBLIC_URL}/images/portfolio/포트폴리오_pc.mp4`} controls muted loop ></video>
                </div>
                
                <div>
                    <h1>모바일 버전</h1>
                    <video width="250px" height="450px" src={`${process.env.PUBLIC_URL}/images/portfolio/포트폴리오_모바일.mp4`} controls muted loop ></video>
                </div>
                

                <div>
                    <h1>탭 버전?</h1>
                    <video width="400px" height="500px" src={`${process.env.PUBLIC_URL}/images/portfolio/포트폴리오_탭.mp4`} controls muted loop ></video>
                </div>
                


                <hr />

                <div className='goToLinks'> 
                    <div className='goGithub'>
                        <button><a href="https://github.com/min-ji97/portfolio-react" target="_blank">GitHub로 이동하기</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;