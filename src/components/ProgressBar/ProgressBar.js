import React from "react";
import './ProgressBar.scss';

const ProgressBar = ({icon, complete}) => {
    return (
        <div className='ProgressBar'>
            <div className='ProgressBar__icon'>
                <img src={require('../../assets/progressBars/'+icon+'.svg')} alt={icon} />
            </div>
            <div className='ProgressBar__progress'><div style={{width: complete}}/></div>
        </div>
    )
}

export default ProgressBar;