
import './css/main.css';

// 폰트
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5 , faCss3Alt, faSass , faJs ,faVuejs, faReact , 
  faNode , faFigma, faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faR } from '@fortawesome/free-solid-svg-icons';


//<FontAwesomeIcon icon="fa-brands fa-css3-alt" /> <FontAwesomeIcon icon="fa-brands fa-github-alt" />

function Main() {

  const iconMap = {
    faHtml5: faHtml5,
    faCss3Alt: faCss3Alt,
    faSass: faSass,
    faJs : faJs,
    faVuejs: faVuejs,
    faReact: faReact,
    faNode: faNode,

    faGithub:faGithub,
    faFigma: faFigma,
  }

  const skillFront = [
    { id: 1 , value: 'HTML5', icon: 'faHtml5' },
    { id: 2 , value: 'CSS3', icon: 'faCss3Alt' },
    { id: 3 , value: 'SCSS' , icon: 'faSass' },
    { id: 4 , value: 'JavaScript' , icon: 'faJs' },
    { id: 5 , value: 'Jquery' , icon: '' },
    { id: 6 , value: 'Vue.js', icon: 'faVuejs' },
    { id: 7 , value: 'React.js' , icon: 'faReact'},
  
  ];
  const skillBack = [
    { id: 1 , value: 'node.js', icon: 'faNode' },
    { id: 2 , value: 'express.js', icon: '' },
    { id: 3 , value: 'MySql' , icon: '' },
    { id: 4 , value: 'MariaDb' , icon: '' },
  ];
  const skillEtc = [
    { id: 1 , value: 'Git', icon: 'faGithub' },
    { id: 2, value: 'Figma', icon : 'faFigma'}
  ];

  const skillFrontList =  skillFront.map((v)=> <span key={v.id}><FontAwesomeIcon icon={iconMap[v.icon]} />{v.value}</span> );
  const skillBackList = skillBack.map((v)=> <span key={v.id}><FontAwesomeIcon icon={iconMap[v.icon]} />{v.value}</span> );
  const skillEtcList = skillEtc.map((v)=> <span key={v.id}><FontAwesomeIcon icon={iconMap[v.icon]} />{v.value}</span> );

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
              {skillFrontList}
            </div>
          </div>
          <div className='skill-back'>
            <div>Back-End</div>
            <div>
              {skillBackList}
            </div>
          </div>
          <div className='skill-etc'>
            <div>etc..</div>
            <div>
              {skillEtcList}
            </div> 
          </div>
        </div>
      </section>


      <section id='project'>
        <div>PROJECT</div>
        <div>
          <div className='project-nav'>
            <button>All</button>
            <button>Vue</button>
            <button>React</button>
            <button>JavaScript</button>
          </div>
          <div className='project-content'>

            <div className='project-content--react'>
              <img src="" alt="" />
              <span>meta bus game</span>
            </div>

            <div className='project-content--react'>
              <img src="" alt="" />
              <span>fruit merge game..?</span>
            </div>

            <div className='project-content--js'>
              <img src="" alt="" />
              <span>Momentum</span>
            </div>
            <div className='project-content--js'>
              <img src="" alt="" />
              <span>네이버 클론코딩</span>
            </div>
            <div className='project-content--js'>
              <img src="" alt="" />
              <span>스타벅스 클론코딩</span>
            </div>
            <div className='project-content--vue'>
              <img src="" alt="" />
              <span>CRUD게시판 Pet Talk!</span>
            </div>
            <div className='project-content--vue'>
              <img src="" alt="" />
              <span>졸업작품 : 누리다</span>
            </div>

          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default Main;