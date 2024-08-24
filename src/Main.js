
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


const projectNavClick = (e) =>{

  const dataTypeVue = document.querySelectorAll('.project-content--vue');
  const dataTypeReact = document.querySelectorAll('.project-content--react');
  const dataTypeJs = document.querySelectorAll('.project-content--js');

  const dataAll = document.querySelectorAll('.project-content--vue, .project-content--react,.project-content--js');

  // let ex = document.querySelectorAll('.project-content--link');
  // ex.forEach(v =>{
  //   v.classList.remove('project--click--content--effect');
  // })

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

    // dataTypeVue.forEach( v =>{
    //   v.style.display = 'block';
    //   v.classList.add('project--click--content--effect');
    // });
    // dataTypeReact.forEach( v =>{
    //   v.style.display = 'block';
    //   v.classList.add('project--click--content--effect');
    // });
    // dataTypeJs.forEach( v =>{
    //   v.style.display = 'block';
    //   v.classList.add('project--click--content--effect');
    // });

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
        offsetY = offsetY -centerY;


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
          <img src={ process.env.PUBLIC_URL + '/images/'+`${listData.img}`  }alt="" />
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
  
  const location = useLocation();



  useEffect(()=>{

    const spanTag = document.querySelectorAll('#introduce span');
    const pjBtn = document.querySelectorAll('#project .project-nav button , #project .project-content img');

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
    { img : '', pjName: 'Chatting game..?' , dataType: 'project-content--react' ,  className: 'project-content--react' , path : "/toBeContiued"},
    // { img : '', pjName: 'fruit merge game..?' , dataType: 'project-content--react' ,className: 'project-content--react', path: "/toBeContiued"},
    { img : 'momentum/thumbnail.png', pjName: 'Momentum' , dataType: 'project-content--js' , className: 'project-content--js', path : '/momentum'},
    { img : 'portfolio/thumbnail.png', pjName: 'portfolio-react' , dataType: 'project-content--react' , className: 'project-content--react', path: '/portfolio'},
    { img : 'naver/thumbnail.png', pjName: '네이버 클론코딩' , dataType: 'project-content--js' , className: 'project-content--js', path:'/naver'},
    { img : 'starbucks/thumbnail.png', pjName: '스타벅스 클론코딩' , dataType: 'project-content--js' ,className: 'project-content--js', path: "/starbucks"},
    { img : 'pet_board/thumbnail.png', pjName: 'CRUD게시판 Pet Talk!' , dataType: 'project-content--vue' , className: 'project-content--vue', path: "/petBoard"},
    { img : 'noorida/thumbnail.png', pjName: '졸업작품 : 누리다' , dataType: 'project-content--vue', className: 'project-content--vue', path: "/noorida"},
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
          <span>mail: whalswl576@gmail.com </span>
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
      <Outlet />
    </div>
  );
}
//  <img src={"./images/pet_board/thumbnail.png" } alt="" width={600} height={300} />
export default Main;