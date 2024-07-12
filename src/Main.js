
import './css/main.css';


// function ProjectComponent(){


// }
// const ProjectComponent = () => {


// }


function Main() {
  const skillFront = [
    { id: 1 , value: 'HTML5', class: 'HTML5-icon' },
    { id: 2 , value: 'CSS3', class: 'CSS3-icon' },
    { id: 3 , value: 'SCSS' , class: 'SCSS-icon' },
    { id: 4 , value: 'JavaScript' , class: 'JavaScript-icon' },
    { id: 5 , value: 'Jquery' , class: 'Jquery-icon' },
    { id: 6 , value: 'Vue.js', class: 'Vue.js-icon' },
    { id: 7 , value: 'React.js' , class: 'React.js-icon'},
  
  ];
  const skillBack = [
    { id: 1 , value: 'node.js', class: 'node-icon' },
    { id: 2 , value: 'express.js', class: 'express-icon' },
    { id: 3 , value: 'MySql' , class: 'MySql-icon' },
    { id: 4 , value: 'MariaDb' , class: 'MariaDb-icon' },
  ];
  const skillEtc = [
    { id: 1 , value: 'Git', class: 'git-icon' },
  ];

  const skillFrontList =  skillFront.map((v)=> <span key={v.id}><i className={v.class}></i>{v.value}</span> );
  const skillBackList = skillBack.map((v)=> <span key={v.id}><i className={v.class}></i>{v.value}</span> );
  const skillEtcList = skillEtc.map((v)=> <span key={v.id}><i className={v.class}></i>{v.value}</span> );

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