
import './css/main.css';

// 폰트
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5 , faCss3Alt, faSass , faJs ,faVuejs, faReact , 
  faNode , faFigma, faGithub
} from "@fortawesome/free-brands-svg-icons";
// import { faR } from '@fortawesome/free-solid-svg-icons'; 아직 안씀!



const PjComponent = ({listData}) =>{
  return (
    <div className={listData.className}> 
      <img src={ process.env.PUBLIC_URL + '/images/'+`${listData.img}`  }alt="" />
      <span>{listData.pjName}</span>
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

function Main() {

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
    { img : '', pjName: 'meta bus game..?' , className: 'project-content--react'},
    { img : '', pjName: 'fruit merge game..?' , className: 'project-content--react'},
    { img : 'momentum/thumbnail.png', pjName: 'Momentum' , className: 'project-content--js'},
    { img : 'portfolio/thumbnail.png', pjName: 'portfolio-react' , className: 'project-content--react'},
    { img : 'naver/thumbnail.png', pjName: '네이버 클론코딩' , className: 'project-content--js'},
    { img : 'starbucks/thumbnail.png', pjName: '스타벅스 클론코딩' , className: 'project-content--js'},
    { img : 'pet_board/thumbnail.png', pjName: 'CRUD게시판 Pet Talk!' , className: 'project-content--vue'},
    { img : 'noorida/thumbnail.png', pjName: '졸업작품 : 누리다' , className: 'project-content--vue'},
  ]


  return (
    <div className='main-container'>

      <header>minji's portfolio</header>

      <section id='introduce'>
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


      <section id='project'>
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
    </div>
  );
}
//  <img src={"./images/pet_board/thumbnail.png" } alt="" width={600} height={300} />
export default Main;