
import { faListSquares } from '@fortawesome/free-solid-svg-icons';
import '../css/petBoard.css';
import '../css/pageCommom.css';

import React from 'react';
import Commom from './Commom';

const PetBoard = () =>{
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
        <div id='project-component' className='project-petboard'>
            <Commom listData={lists}/>

            <div>
                <h1>로그인</h1>
                <div className='pet--login'> {/* 로그인 */}
                    <img src={process.env.PUBLIC_URL +` /images/pet_board/로그아웃_홈화면.png`} alt="" />
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/로그인.png`} alt="" />
                        <p>사용자의 인증을 구현해주는 <strong>passport</strong> 미들웨어를 사용하였습니다.</p>
                        <p>
                            아이디와 비밀번호의 인증을 확인하고, 사용자 정보를 세션에 저장해줍니다.
                            쿠키를 생성하여 로그인 상태를 지속적으로 유지할 수 있도록 하였습니다.
                        </p>
                    </div>
                </div>
                <hr />
                <h1>회원가입</h1>
                <div className='pet--register'>{/* 회원가입 */}
                    <img src={process.env.PUBLIC_URL +` /images/pet_board/회원가입.png`} alt="" />
                    <p>
                        아이디와 닉네임은 중복 검사를 통해 데이터베이스에 동일한 값이 존재하는지 
                        확인 후 중복이 없으면 true를 반환하여 회원가입이 가능한 상태로 만들어 주었습니다.
                    </p>
                </div>
                <hr />
                <div className='pet--homeQA'>{/* Home & Q&A 게시판 */}
                    <div>
                        <h1>Home 게시판</h1>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/홈화면_1.png`} alt="" />
                    </div>
                    <div>
                        <h1>Q&A 게시판</h1>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/큐엔에이.png`} alt="" />
                        <p>자신의 반려동물을 소개하고 자랑하는 Home 게시판과 반려인들이 정보를 공유하는 Q&A 게시판입니다.</p>
                        <p>Home게시판에서는 사진을 한장 이상 첨부하지 않을 경우 글 작성이 이루어지지 않도록 하였습니다.</p>
                        <p>Home의 게시글은 재사용 가능한 component를 이용하여 게시판을 만들었습니다.</p>
                    </div>
                </div>

                <hr />
                <h1>글 작성</h1>
                <div className='pet--create'>{/* 글 작성 */}
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/홈화면_글작성.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/큐엔에이_글작성.png`} alt="" />
                    </div>
                    <p>글 작성은 로그인 상태에서만 가능합니다. </p>
                    <p>Home 게시글 작성의 경우, 소개 및 자랑 게시판이므로 사진을 한장 이상 반드시 첨부하도록 만들었습니다.</p>
                    <p className='gray-color'>데이터베이스에 사진을 저장할 수 있을까? 하는 호기심에 사진을 꼭 사용하는 게시판을 만들고 싶었습니다..!</p>
                    <p>글 작성 에디터는 <strong>tiptap</strong> 라이브러리를 사용하였습니다. </p>
                    <div>
                        <p> 글작성을 완료하면 작성한 내용들을 전부 Html로 변환시켜 전송합니다. 이때 사진의 경우 img태그로 변화시켜 전송합니다. </p>
                        <p>이때, 사진의 경우 img 태그로 변환시켰습니다.</p>
                        <p>사용자가 사진을 첨부하는 순간 파일을 formData에 추가하고 서버로 전송시켰습니다.</p>
                        <p>서버에서는 multer 미들웨어를 사용하여 해당 파일을 public/images 파일에 저장하고 저장된 파일의 이름을 응답으로 반환시킵니다.</p>
                        <p>클라이언트는 서버로부터 파일 이름을 받아( 파일 경로를 획득 ) 이미지URL을 구성하고 이를 사용하여 이미지 경로를 설정하였습니다.</p>
                        <p>데이터베이스에 저장되는것은 사진이 아닌 이미지 경로가 저장되게 됩니다.</p>
                    </div>
                    
                </div>

                <hr />
                <h1>댓글 작성</h1>
                <div className='pet--create-comment'>
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글작성_작성중.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글작성_작성완료.png`} alt="" />
                    </div>
                    <p> </p>
                </ div>

                <hr />
                <h1>상세페이지와 댓글</h1>
                <div className='pet--detail-comment'>{/* 상세페이지와 댓글 */}
                    <img src={process.env.PUBLIC_URL +` /images/pet_board/home 메인페이지.png`} alt="" />
                    <div>
                        <p>상세페이지에서는 작성자, 조회수, 작성일, 좋아요 수를 확인 할 수 있습니다.</p>
                        <br />
                        <p>작성자는 게시글/댓글을 수정 및 삭제할 수 있습니다.</p>
                        <p>작성자가 아닌 유저에게는 수정 및 삭제 버튼이 보이지 않습니다.</p>
                        <br />
                        <p>게시글 수정 버튼을 클릭하면 해당 게시글의 제목, 내용, contentId를 게시글 작성 컴포넌트로 넘겨주고 </p>
                        <p>게시글의 제목과 내용을 초기화시켜 주었습니다.</p>
                        <br />
                        <p className='gray-color'>
                            좋아요 버튼은 구현 중입니다!<br />
                            토글버튼으로 만들 예정입니다.
                        </p>
                    </div>
                </div>

                <hr />
                <h1>게시글 및 댓글 수정</h1> 
                <div className='pet--modify'>  {/* 게시글 및 댓글 수정*/}
                    <div>
                        <span>게시글 수정전</span>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/게시글수정_수정전.png`} alt="" />
                    </div>
                    <div>
                        <span>게시글 수정중</span>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/게시글수정_수정중.png`} alt="" />
                    </div>
                    <div>
                        <span>게시글 수정완료</span>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/게시글수정_수정완료.png`} alt="" />
                    </div>
                    <div>
                        <span>댓글 수정전</span>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글수정_수정전.png`} alt="" />
                    </div>
                    <div className='pet--modify--item5'>
                        <span>댓글 수정중</span>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글수정_수정중.png`} alt="" />
                    </div>
                    <div className='pet--modify--item6'>
                        <span>댓글 수정완료</span>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글수정_수정완료.png`} alt="" />
                    </div>
                    <div>
                        <span>댓글 수정버튼 클릭</span>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글수정_수정버튼클릭.png`} alt="" />
                    </div>
                    <div className='pet--modify--item8'>
                        <p>게시글 수정</p>
                        <p>게시글 수정 버튼을 클릭하면, 게시글 작성 component를 불러와 재사용하여, 해당 게시글의 데이터를 넣어주었습니다. </p>
                        <p>댓글 수정</p>
                        <p>게시글 수정과 동일합니다.</p>
                        <p>댓글 수정을 클릭하면 해당 댓글 창에 textarea태그를 추가하여 댓글이 달린 위치에 바로 수정할 수 있도록 하였습니다.</p>
                        <p>댓글 수정 중, 다른 댓글 수정을 클릭하여 수정하면 안되기 때문에 하나의 댓글만 수정 할 수 있도록 하였습니다.</p>
                    </div>
                </div>

                <hr />
                <h1>게시글 및 댓글 삭제</h1> 
                <div className='pet--delete'>  {/* 게시글 및 댓글 수정*/}
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/게시글삭제_알림.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/게시글삭제_완료.png`} alt="" />
                       
                    </div>
                    <img src={process.env.PUBLIC_URL +` /images/pet_board/게시글삭제_DB.png`} alt="" />
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글삭제_전.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글삭제_중.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/댓글삭제_후.png`} alt="" />
                    </div>
                    <span>
                        <p>
                            게시글과 댓글을 삭제할 때 해당 데이터는 데이터베이스에서 아예 삭제되지 않도록 하였습니다. 
                        </p>
                        <p> 삭제한 데이터일 경우 active = 'N' 값을 주었습니다.  </p>
                        <p> 데이터를 불러올때 active = 'Y'인 값을 가진 게시글과 댓글들만 불러오게 됩니다. </p>
                    </span>
                    
                </div>


                <hr />
                <h1>메뉴 열기</h1>
                <div className='pet--menu'>{/* 메뉴열기 */}
                    <p>오른쪽 상단의 프로필 사진을 클릭하여 메뉴를 오픈할 수 있습니다</p>
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/메뉴보기_1.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/메뉴보기_2.png`} alt="" />
                    </div>

                </div>

                <hr />
                <h1>변경페이지 - 프로필사진 / 닉네임 / 비밀번호 변경 가능</h1>
                <div className='pet--change'>{/* 변경페이지- 프로필 사진 / 닉네임 / 비밀번호 변경 가능 */}
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/회원정보변경_1.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/회원정보변경_2.png`} alt="" />
                    </div>
                    <p>변경페이지 입니다.</p>
                    <p>프로필 사진, 닉네임, 비밀번호 변경을 할 수 있습니다.</p>
                    <p>프로필 사진은 게시글 작성 시 사진 첨부와 같은 방법으로 구현됩니다.</p>
                    <p>프로필 사진 변경을 완료하기 전에, 왼쪽 사진처럼 미리 확인해본 뒤 변경할 수 있습니다.</p>
                    <br />
                    <p>닉네임 변경은 회원가입 시 처럼, 중복 검사 후 변경이 가능하도록 하였습니다.</p>
                    <br />
                    <p>비밀번호 변경은 기존 비밀번호를 알아야지만 변경이 가능하도록 하였습니다.</p>
                </div>

                <hr />
                <h1>내가 쓴 글</h1>
                <div className='pet--myWrite'>{/* 내가 쓴 글 */}
                    <p>내가 쓴 글들만 모아 확인할 수 있습니다.</p>
                    <p className='gray-color'>내가 좋아요를 클릭한 글들도 모아서 확인 할 수 있도록 하였으나,<br />
                    아직 좋아요 기능을 구현하는 중입니다!
                    </p>
                    <div>
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/내가쓴글_홈화면.png`} alt="" />
                        <img src={process.env.PUBLIC_URL +` /images/pet_board/내가쓴글_큐엔에이.png`} alt="" />
                    </div>
                    
                </div>

                <hr />
                <h1> 내가 좋아요 한 글</h1>
                <div className='pet--myLike'>
                    <p>구현 할 예정입니다..!</p>
                </div>

                <hr />
                <div className='goGithub'>
                    <button><a href="https://github.com/min-ji97/pet_board" target="_blank">GitHub로 이동하기</a></button>
                </div>
                
            </div>
        </div>
    )
}

export default PetBoard;