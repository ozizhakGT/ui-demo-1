import React, {useCallback} from "react";
import './Goals.scss'
import Container from "../../Container/Container";
import progressBars from "../../../static/progressBars";
import Icon from "../../Icon/Icon";

const Goals = () => {
    const renderGaolsContainers = useCallback(() => {
        return progressBars.map(goal => (
            <Container classNames='Container__full' key={goal.id}>
                <p className='Goals__title'>{goal.title}</p>
                <div className='Goals__progress-bar' style={{color: goal.themeColor}}>
                    <div className='Goals__progress-bar--title'>
                        {goal.icon && <Icon icon={goal.icon} />}
                        <p className='weight700'>{goal.progressTitle}</p>
                        <a className='Goals__progress-bar--edit' href="#">Edit</a>
                    </div>
                    <div className='Goals__progress-bar--progress' style={{borderColor: goal.themeColor}}>
                        <div style={{width: goal.complete, backgroundColor: goal.themeColor}}>{goal.progressSubtitle}</div>
                    </div>
                </div>
            </Container>
        ))
    }, [])

    return (
        <div className='Goals'>
            <p className='subtitle Goals__title'>MY GOALS</p>
            {renderGaolsContainers()}
        </div>
    )
}

export default Goals