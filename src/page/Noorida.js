
// import '../css/noorida.css';
import React from 'react';
import Commom from './Commom';
import '../css/pageCommom.css';
import '../css/noorida.css';

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

            <div id='noorida-component'>
                <h1>주요 기능</h1>
                <div className='noorida-func'>
                    <div>
                        <span className='noorida-func--title'>계정관리 : </span>
                        <span> 회원가입, 로그인, 닉네임 및 비밀번호 찾기가 가능하다.</span>
                    </div>
                    <div>
                        <span className='noorida-func--title'>사이드 메뉴 : </span>
                        <span> 내 프로필, 계정 탈퇴, 비밀번호 변경, 로그아웃이 가능하다.</span>
                    </div>
                    <div>
                        <span className='noorida-func--title'>게시물 미리보기 리스트 : </span>
                        <span> 지역 소식 탭, 구독 게시물 탭, 지역 핫 토픽 탭으로 구성되어 있다.</span>
                    </div>
                    <div>
                        <span className='noorida-func--title'>게시글 작성 : </span>
                        <span> 글 작성을 할 때 위치 획득을 하고 글을 작성한다.</span>
                        
                    </div>
                    <div>
                        <span className='noorida-func--title'>본 게시물 : </span>
                        <span>
                            <span> 내 게시물에서는 삭제가 가능하고 다른 유저의 게시물에선 스크랩, 차단, 신고, 감정표현, 평가가 가능하다.</span>
                            <span> 조회수는 1인 1번만 반영, 프로필 카드 클릭 시 자겅자의 프로필로 이동, 댓글 작성, 리스트 확인이 가능하다.</span>
                        </span>
                       
                    </div>
                    <div>
                        <span className='noorida-func--title'>검색 : </span>
                        <span> 지역 검색, 리포터 검색, 게시물 제목 검색 기능이 있다.</span>
                    </div>
                    <div>
                        <span className='noorida-func--title'>프로필 페이지 : </span>
                        <span>
                            <span> 내 프로필 조회 시 프로필 사진 변경, 자기소개 변경, 구독자, 리포터, 구독한 지역 리스트 확인, 내가 작성한 게시물, 스크랩한 게시물, 차단한 유저 목록을 볼 수 있다.</span>
                            <span> 상대방 프로필 조회 시 프로필 사진 자기소개, 해당 유저가 작성한 게시글 목록 조회 가능, 해당 유저의 차단 가능, 구독 및 구독 취소가 가능하다.</span>
                        </span>
                    </div>
                </div>

                <div className='noorida-content'>
                    <h1>로그인 및 회원가입</h1>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/예시1.png`} alt="" />
                    </div>

                    <h1>아이디 및 비밀번호 찾기</h1>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/예시2.png`} alt="" />
                    </div>

                    <h1>게시물 미리보기 및 사이드 메뉴</h1>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/예시3.png`} alt="" />
                    </div>

                    <h1>프로필 페이지</h1>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/졸업작품_3.png`} alt="" />
                        <div>나의 프로필</div>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/예시6.png`} alt="" />
                        <div>다른사람의 프로필</div>
                    </div>

                    <h1>게시글 작성</h1>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/예시5.png`} alt="" />
                    </div>

                    <h1>게시물</h1>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/예시4.png`} alt="" />
                    </div>

                    <h1>검색</h1>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/noorida/예시7.png`} alt="" />
                    </div>
                </div>
                



                <hr />
                <div className='goGithub'>
                    <button><a href="https://github.com/JJ-Min/noorida" target="_blank">GitHub로 이동하기</a></button>
                </div>
            </div>
        </div>
    )
}

export default Noorida;