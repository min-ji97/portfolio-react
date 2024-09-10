
import React , { useEffect , useRef } from 'react';
import { useLocation ,useNavigate , Link} from 'react-router-dom';

import { Outlet } from "react-router-dom";

// import ReactFullpage from '@fullpage/react-fullpage';

// import {SectionsContainer, Section} from 'react-fullpage';



import './css/footer.css';


// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";




import './css/main.css';

// 폰트
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5 , faCss3Alt, faSass , faJs ,faVuejs, faReact , 
  faNode , faFigma, faGithub
} from "@fortawesome/free-brands-svg-icons";
// import { faR } from '@fortawesome/free-solid-svg-icons'; 아직 안씀!


const projectNavClick = (e) =>{

  const dataTypeVue = document.querySelectorAll('.project-content--vue');
  const dataTypeReact = document.querySelectorAll('.project-content--react');
  const dataTypeJs = document.querySelectorAll('.project-content--js');

  const dataAll = document.querySelectorAll('.project-content--vue, .project-content--react,.project-content--js');


  dataTypeVue.forEach( v =>{
    v.classList.remove('project--click--content--effect');
  });
  dataTypeReact.forEach( v =>{
    v.classList.remove('project--click--content--effect');
  });
  dataTypeJs.forEach( v =>{
    v.classList.remove('project--click--content--effect');
  });


  let countDelay = 0; 
  if(e.target.innerText === 'Vue'){

   
    dataTypeVue.forEach( v =>{
      v.style.display = 'block';
      v.classList.add('project--click--content--effect');
      
      v.style.animationDelay= `${countDelay}s`;
      countDelay += 0.1;
    });
    dataTypeReact.forEach( v =>{
      v.style.display = 'none';
      // v.classList.remove('project--click--content--effect');
    });
    dataTypeJs.forEach( v =>{
      v.style.display = 'none';
      // v.classList.remove('project--click--content--effect');
    });

   


  }else if(e.target.innerText === 'React'){

    dataTypeVue.forEach( v =>{
      v.style.display = 'none';
      // v.classList.remove('project--click--content--effect');
    });
    dataTypeReact.forEach( v =>{
      v.style.display = 'block';
      v.classList.add('project--click--content--effect');
      v.style.animationDelay= `${countDelay}s`;
      countDelay += 0.1;
    });
    dataTypeJs.forEach( v =>{
      v.style.display = 'none';
      // v.classList.remove('project--click--content--effect');
    });

  }else if(e.target.innerText === 'JavaScript'){

    dataTypeVue.forEach( v =>{
      v.style.display = 'none';
      // v.classList.remove('project--click--content--effect');
    });
    dataTypeReact.forEach( v =>{
      v.style.display = 'none';
      // v.classList.remove('project--click--content--effect');
    });
    dataTypeJs.forEach( v =>{
      v.style.display = 'block';
      v.classList.add('project--click--content--effect');
 
      v.style.animationDelay= `${countDelay}s`;
      countDelay += 0.1;
    });

  }else{ // All
    dataAll.forEach( v =>{
      v.style.display = 'block';
      v.classList.add('project--click--content--effect');

      v.style.animationDelay= `${countDelay}s`;
      countDelay += 0.1;
    });
  }



  return() =>{
  // 클래스 삭제
    dataTypeVue.forEach( v =>{
      v.classList.remove('project--click--content--effect');
    });
    dataTypeReact.forEach( v =>{
      v.classList.remove('project--click--content--effect');
    });
    dataTypeJs.forEach( v =>{
      v.classList.remove('project--click--content--effect');
    });
  }
}   

const PjComponent = ({listData}) =>{
  let offsetX = 0;
  let offsetY = 0;


  useEffect(()=>{

    const projectContent = document.querySelectorAll('#project--component--container');
    
    // const hoverProject = document.querySelector('.project-content--link:hover');
  
    let projectHover = (item) =>{
      
      const projectItem = item.currentTarget;
      // console.log(item);


      offsetX = item.offsetX;
      offsetY = item.offsetY;

      // 미친 이걸써줘야 됐던거야!!!!왜!?????????????????????????????
      // if(this !== item.target){
      //   offsetX = offsetX + item.target.offsetLeft;
      //   offsetY = offsetY + item.target.offsetTop;
      // }

        /**
         * 0,0   1,0
         * 
         * 0,1   1,1
         * 이라고 할 때!
         * 
         * 0,0 일때  -20, 20이여야함
         * 1,0 일때   -20, -20
         * 0,1 일때    20, 20 ?
         * 1,1 일때   20, -20 ?
         * 
         * 
         * 
         * 
        */

      // projectItem.offsetWidth은420, projectItem.offsetHeight은 310 나옴!
        const centerX = projectItem.offsetWidth/2;
        const centerY = projectItem.offsetHeight/2;

        // console.log(centerX,centerY );

        offsetX = offsetX - centerX;
        offsetY = offsetY - centerY;


        if(projectItem !== item.target){
          offsetX += item.target.offsetLeft;
          offsetY += item.target.offsetTop;
        }

  

      

      // let rotateX = (4/30 * offsetY) - 20;
      // let rotateY =  (-1/5 * offsetX) + 20;
    
      let rotateX = (offsetY / centerY) * 20;
      let rotateY =  (offsetX / centerX) * -20;

      projectItem.style.transform = ` perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      projectItem.style.transition = `transform 0.3s`;
   

    }

    const projectOut = (item) => {

      const projectItem = item.currentTarget;
      projectItem.style.transform = ` perspective(350px) rotateX(0deg) rotateY(0deg)`;
      projectItem.style.transition = `transform 0.3s`;
    } 

    projectContent.forEach((item)=>{
      item.addEventListener("mousemove", projectHover);
      item.addEventListener("mouseleave", projectOut);
    })

    return () =>{
      projectContent.forEach((item)=>{
        item.removeEventListener("mousemove", projectHover );
        item.removeEventListener("mouseleave", projectOut);
      })
    }

  },[]);

  
  return (
    <div id='project--component--container'>
      <div className={listData.className} data-type={listData.dataType}> 
        <Link to={listData.path} className='project-content--link'>
          <div className='project--imgBox'>
            <img src={ process.env.PUBLIC_URL + '/images/'+`${listData.img}`  }alt="" />
          </div>
          
          <span>{listData.pjName}</span>
        </Link>
      </div>
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

const Main = ( {setIsHovering} ) => {

  const mainHeaderRef = useRef(null);
  const introduceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();



  useEffect(()=>{

    const spanTag = document.querySelectorAll('#introduce span');
    const pjBtn = document.querySelectorAll('#project .project-nav button , #project .project-content img , .contact--git a , .contact--blog a');

    // span 태그에 닿으면 커서 크기 증가
    spanTag.forEach((item)=>{
      
      item.addEventListener('mouseenter',()=>{setIsHovering("spanHover")});
    })
    spanTag.forEach((item)=>{
      item.addEventListener('mouseleave',()=>{setIsHovering(null);})
    })

    // 프로젝트 Button에 닿으면 커서 크기 증가 + click 
    pjBtn.forEach( item =>{
      item.addEventListener('mouseenter',()=> setIsHovering("btnHover"));
      item.addEventListener('click',()=> setIsHovering(null));
    })
    pjBtn.forEach( item =>{
      item.addEventListener('mouseleave',()=> setIsHovering(null));
    })


    return () =>{
      spanTag.forEach((item)=>{
        item.removeEventListener('mouseenter',()=>setIsHovering("spanHover"));
        item.removeEventListener('mouseleave',()=>setIsHovering(null));
      })
      pjBtn.forEach((item)=>{
        item.removeEventListener('mouseenter',()=>setIsHovering("btnHover"));
        item.removeEventListener('mouseleave',()=>setIsHovering(null));
      })
    }
  },[setIsHovering])



  // console.log( introduceRef.current   );


  useEffect( ()=>{
    if(location.hash === '#main-container'){
      mainHeaderRef.current.scrollIntoView({ behavior : 'smooth' });
    }else if(location.hash === '#introduce'){
      introduceRef.current.scrollIntoView({ behavior : 'smooth' });
    }else if(location.hash === '#project'){
      projectRef.current.scrollIntoView({ behavior : 'smooth' });
    }else if(location.hash === '#contact'){
      contactRef.current.scrollIntoView({ behavior : 'smooth' });
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
    // { img : '', pjName: 'Chatting game..?' , dataType: 'project-content--react' ,  className: 'project-content--react' , path : "/project/toBeContiued"},
    // { img : '', pjName: 'fruit merge game..?' , dataType: 'project-content--react' ,className: 'project-content--react', path: "/toBeContiued"},
    { img : 'momentum/thumbnail.png', pjName: 'Momentum' , dataType: 'project-content--js' , className: 'project-content--js', path : '/project/momentum'},
    { img : 'portfolio/thumbnail.png', pjName: 'portfolio-react' , dataType: 'project-content--react' , className: 'project-content--react', path: '/project/portfolio'},
    { img : 'naver/thumbnail.png', pjName: '네이버 클론코딩' , dataType: 'project-content--js' , className: 'project-content--js', path:'/project/naver'},
    { img : 'starbucks/thumbnail.png', pjName: '스타벅스 클론코딩' , dataType: 'project-content--js' ,className: 'project-content--js', path: "/project/starbucks"},
    { img : 'pet_board/thumbnail.png', pjName: 'CRUD게시판 Pet Talk!' , dataType: 'project-content--vue' , className: 'project-content--vue', path: "/project/petBoard"},
    { img : 'noorida/thumbnail.png', pjName: '졸업작품 : 누리다' , dataType: 'project-content--vue', className: 'project-content--vue', path: "/project/noorida"},
  ]

  // let options ={
  //   anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],

  //   activeClass:          'active', // the class that is appended to the sections links
  //   arrowNavigation:      true, // use arrow keys
  //   className:            'SectionContainer', // the class name for the section container
  //   delay:                1000, // the scroll animation speed
  //   navigation:           true, // use dots navigatio
  //   scrollBar:            false, // use the browser default scrollbar
  //   sectionClassName:     'Section', // the section class name
  //   sectionPaddingTop:    '0', // the section top padding
  //   sectionPaddingBottom: '0', // the section bottom padding
  //   verticalAlign:        false,// align the content of each section vertical
  //   scrollHorizontally: true
  // };

  return (
    
    <div id='main-container' ref={mainHeaderRef}>
      {/* <SectionsContainer {...options}> <Section  > */}
          <section id="home">
            {/* <canvas>
              
            </canvas> */}
            <div className="home--title">
              <div>Minji's</div>
              <div>Portfolio</div>
            </div>
            <div className='home--intro'>
              {/* <h1>안녕하세요</h1>
              <h1>프론트엔드 신입 개발자를 꿈꾸는 조민지 입니다.</h1>
              <span>신입 개발자로서 고객들이 쉽게 사용할 수 있는 아름답고 </span>
              <span>기능적인 웹 애플리케이션을 만드는 데 기여하고 싶습니다.</span>
              <span>끊임없이 배우고 성장해 나가는 개발자가 되도록 하겠습니다.</span> */}
            </div>
          </section>
        {/* </Section> */}

        {/* <Section style="height: auto; max-height: none;"> */}
          <section id='introduce' ref={introduceRef} >
            <div className='about-me'>
              <h1>about me</h1>
              <span>조민지</span>
              <span>1997.11.10</span>
              <span>address: 경기도 이천</span>
              <span>mail: whalswl576@gmail.com </span>
              <span>학력: 남서울대학교 컴퓨터소프트웨어학과 졸업</span>
            </div>
            <div className='certificate'>
              <h1>certificate</h1>
              <span>정보처리기사</span>
              <span>MOS MASTER : Word, Excel, Powerpoint + Access</span>
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
        {/* </Section>
        <Section 
        style="height: auto; max-height: auto;">           */}
          <section id='project' ref={projectRef} >
            <h1>PROJECT</h1>
            <div>
              <div className='project-nav'>
                <button onClick={projectNavClick}>All</button>
                <button onClick={projectNavClick}>Vue</button>
                <button onClick={projectNavClick}>React</button>
                <button onClick={projectNavClick}>JavaScript</button>
              </div>
              <div className='project-content'>
              {  projectLists.map( lists => <PjComponent listData= {lists}  />) }
              </div>
            </div>
          </section>
        {/* </Section>
      </ SectionsContainer> */}

          <section id='contact' ref={contactRef} >
            <h1>CONTACT</h1>
            
              <div className='contact--list'>

                <div className='contact--flip'>
                  <div className='contact--card'>
                        
                    <div className='card--front'>
                      GITHUB
                    </div>
                    <div className='card--back contact--git'>
                      
                        <a href="https://github.com/min-ji97" target="_blank">
                            <FontAwesomeIcon className="icon" icon={faGithub} />
                            <p>바로가기</p>
                        </a>
                    </div>
                  </div>
                </div>
                  
                <div className='contact--flip'>
                  <div className='contact--card'>
                    <div className='card--front'>
                      B-LOG
                    </div>
                    <div className='card--back contact--blog'>
                      <a href="https://min-coding.tistory.com/" target='_blank'>
                        <FontAwesomeIcon className="icon" icon={faBlog} />
                        <p>바로가기</p>
                      </a>
                    </div>
                  </div>
                </div>


                <div className='contact--flip'>
                  <div className='contact--card'>
                    <div className='card--front contact--email'>
                      whalswl576@gmail.com
                    </div>
                    <div className='card--back contact--email'>
                      whalswl576@gmail.com
                    </div>
                  </div>
                </div>

              </div>


          </section>


      <Outlet />
    </div>
  );
}
//  <img src={"./images/pet_board/thumbnail.png" } alt="" width={600} height={300} />
export default Main;