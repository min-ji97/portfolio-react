
import React , { useEffect , useRef } from 'react';
import { useLocation ,useNavigate , Link} from 'react-router-dom';

import { Outlet } from "react-router-dom";


import './css/main.css';

// 폰트
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5 , faCss3Alt, faSass , faJs ,faVuejs, faReact , 
  faNode , faFigma, faGithub
} from "@fortawesome/free-brands-svg-icons";
// import { faR } from '@fortawesome/free-solid-svg-icons'; 아직 안씀!


const PjClick = (e)=>{
  // const navigate = useNavigate();  
  let className = e.target.parentElement.className.split(" ");
  console.log(className[1]);
  // console.log( '클래스이름을 잘 가져옴! :' , e.target.parentElement.className);
  console.log('데이터 타입을 아주 잘 가져온다~~ 미쳤다 미쳤어:  ', e.target.parentElement.getAttribute('data-type'));
  // navigate("/petBoard");
  // console.log('클래스와 :  ',e.,'dataType : ');
  

}

const PjComponent = ({listData}) =>{

  // const pjTag = document.querySelector(`.${listData.className}`);
  // console.log(`${listData.className}`, pjTag);
 

  return (
    <div className={listData.className} data-type={listData.dataType}> 
      <Link to={listData.path} className='project-content--link'>
        <img src={ process.env.PUBLIC_URL + '/images/'+`${listData.img}`  }alt="" />
        <span>{listData.pjName}</span>
      </Link>
      
    </div>
  )
};

const SkillComponent = ({listData}) => {
  const iconMap = {
    //front
    faHtml5: faHtml5,
    faCss3Alt: faCss3Alt,
    faSass: faSass,
    faJs : faJs,
    faVuejs: faVuejs,
    faReact: faReact,

    //back
    faNode: faNode,

    //etc..
    faGithub:faGithub,
    faFigma: faFigma,
  }
  return(
    <span>
      { listData.icon ? <FontAwesomeIcon icon={iconMap[listData.icon]} /> : null}
      {listData.value}
    </span>
  )
};

const Main = () => {

  const mainHeaderRef = useRef(null);
  const introduceRef = useRef(null);
  const projectRef = useRef(null);
  
  const location = useLocation();

  useEffect( ()=>{
    if(location.hash === '#main-container'){
      mainHeaderRef.current.scrollIntoView({ behavior : 'smooth' });
    }else if(location.hash === '#introduce'){
      introduceRef.current.scrollIntoView({ behavior : 'smooth' });
    }else if(location.hash === '#project'){
      projectRef.current.scrollIntoView({ behavior : 'smooth' });
    }
  },[location]);


  const skillFront = [
    { value: 'HTML5', icon: 'faHtml5' },
    { value: 'CSS3', icon: 'faCss3Alt' },
    { value: 'SCSS' , icon: 'faSass' },
    { value: 'JavaScript' , icon: 'faJs' },
    { value: 'Jquery' , icon: '' },
    { value: 'Vue.js', icon: 'faVuejs' },
    { value: 'React.js' , icon: 'faReact'},
  
  ];
  const skillBack = [
    { value: 'node.js', icon: 'faNode' },
    { value: 'express.js', icon: '' },
    { value: 'MySQL' , icon: '' },
    { value: 'MariaDB' , icon: '' },
  ];
  const skillEtc = [
    { value: 'Git', icon: 'faGithub' },
    { value: 'Figma', icon : 'faFigma'}
  ];


  const projectLists = [
    { img : '', pjName: 'meta bus game..?' , dataType: 'project-content--react' ,  className: 'project-content--' , path : "/toBeContiued"},
    { img : '', pjName: 'fruit merge game..?' , dataType: 'project-content--react' ,className: 'project-content--', path: "/toBeContiued"},
    { img : 'momentum/thumbnail.png', pjName: 'Momentum' , dataType: 'project-content--js' , className: 'project-content--momentum', path : '/momentum'},
    { img : 'portfolio/thumbnail.png', pjName: 'portfolio-react' , dataType: 'project-content--react' , className: 'project-content--portfolio', path: '/portfolio'},
    { img : 'naver/thumbnail.png', pjName: '네이버 클론코딩' , dataType: 'project-content--js' , className: 'project-content--naver', path:'/naver'},
    { img : 'starbucks/thumbnail.png', pjName: '스타벅스 클론코딩' , dataType: 'project-content--js' ,className: 'project-content--starbucks', path: "/starbucks"},
    { img : 'pet_board/thumbnail.png', pjName: 'CRUD게시판 Pet Talk!' , dataType: 'project-content--vue' , className: 'project-content--petBoard', path: "/petBoard"},
    { img : 'noorida/thumbnail.png', pjName: '졸업작품 : 누리다' , dataType: 'project-content--vue', className: 'project-content--noorida', path: "/noorida"},
  ]


  return (
    <div id='main-container' ref={mainHeaderRef}>

      <header>minji's portfolio</header>

      <section id='introduce' ref={introduceRef}>
        <div className='about-me'>
          <h1>about me</h1>
          <span>조민지</span>
          <span>1997.11.10</span>
          <span>address: 경기도 이천</span>
          <span>mail: whalswl576@naver.com </span>
          <span>학력: 남서울대학교 컴퓨터소프트웨어학과 졸업</span>
        </div>
        <div className='certificate'>
          <h1>certificate</h1>
          <span>정보처리기사</span>
          <span>MOS MASTER</span>
        </div>
        <div className='skill'>
          <h1>skill</h1>
          <div className='skill-front'>
            <div>Front-End</div>
            <div>
              { skillFront.map( lists => <SkillComponent listData={lists}/>) }
            </div>
          </div>
          <div className='skill-back'>
            <div>Back-End</div>
            <div>
              { skillBack.map( lists => <SkillComponent listData={lists}/>)}
            </div>
          </div>
          <div className='skill-etc'>
            <div>etc..</div>
            <div>
              { skillEtc.map( lists => <SkillComponent listData={lists}/>)}
            </div> 
          </div>
        </div>
      </section>


      <section id='project' ref={projectRef}>
        <h1>PROJECT</h1>
        <div>
          <div className='project-nav'>
            <button>All</button>
            <button>Vue</button>
            <button>React</button>
            <button>JavaScript</button>
          </div>
          <div className='project-content'>
           {  projectLists.map( lists => <PjComponent listData= {lists}  />) }
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
}
//  <img src={"./images/pet_board/thumbnail.png" } alt="" width={600} height={300} />
export default Main;