import '../css/commom.css';
import React from 'react';
import ScrollToTop from '../ScrollToTop';

const SpanTag = ({listData}) => {
    return(
        <span>
            {listData}
        </span>
    )
};

const Commom = ({listData}) => {
    
    let skill = listData.skill;
 
    skill.map( value => console.log(value));

    return (
        <div id="pj-component">
            <ScrollToTop></ScrollToTop>
            <div className='pj-component--title'>
                <h1>{listData.titleH1}</h1>
                <span>{listData.titleSpan}</span>
            </div> 
            <div className='pj-component--skill'>
                <div>
                    { skill.map( value =>   <SpanTag listData={value}/>) }
                </div>
                <hr />
            </div>
        </div>
    )
};

export default Commom;