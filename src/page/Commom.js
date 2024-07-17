import '../css/commom.css';
import React from 'react';


const SpanTag = ({listData}) => {
    console.log('왜  여기 들어오긴 하니..?' ,listData )
    return(
        <span>
            {listData}
        </span>
       
    )
};

const Commom = (list) => {
    

    let skill = list.listData.skill;
    console.log('스킬//' ) ;

    skill.map( value => console.log(value));

    return (
        <div id="project-component">
            <div className='project-component--title'>
                <h1>{list.listData.titleH1}</h1>
                <span>{list.listData.titleSpan}</span>
            </div> 
            <div className='project-component--skill'>
                <div>
                    { skill.map( value =>   <SpanTag listData={value}/>) }
                </div> 
                
            </div>
        
            
        </div>
    )
};

export default Commom;