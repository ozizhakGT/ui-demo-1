import React, {useCallback, useState} from "react";
import './Overview.scss';
import Container from "../../Container/Container";
import ProgressBar from "../../ProgressBar/ProgressBar";
import ToggleBtn from "../../ToggleBtn/ToggleBtn";
import {piCharts} from "../../../static/charts";
import moneySavedPiChart from '../../../assets/charts/pi/money-saved.svg'
import candidateSourced from '../../../assets/charts/candidates-sourced.svg';

const Overview = () => {
    const [status, setStatus] = useState('optimal');

    const renderPiCharts = useCallback((currentStatus = 'optimal') => {
        return piCharts.map((chart, i, arr) =>
            <div className={`pi-chart ${chart.className}`} key={chart.id}>
                <p className='weight500'>{chart.department}</p>
                <img src={require('../../../assets/charts/pi/' + currentStatus + '/' + chart.picName + '.svg')} alt={chart.picName}/>
                {i !== arr.length - 1 && <hr/>}
            </div>
        )
    }, [])
    return (
        <div className='Overview'>
            <div className='Overview__row'>
                <Container classNames='Container__small'>
                    <p className='subtitle'>OPEN POSITIONS</p>
                    <p className='title weight700'>2,540</p>
                </Container>
                <Container classNames='Container__small'>
                    <p className='subtitle'>REMOTE POSITIONS</p>
                    <p className='title weight700'>134</p>
                </Container>
                <Container classNames='Container__small'>
                    <p className='subtitle'>REMOTE POSITIONS</p>
                    <p className='title weight700'>400</p>
                </Container>
                <Container classNames='Container__medium'>
                    <p className='subtitle'>MY GOALS</p>
                    <div>
                        <ProgressBar icon='dollar' complete="72%"/>
                        <ProgressBar icon='house' complete="12%"/>
                        <ProgressBar icon='personal' complete="56%"/>
                    </div>
                </Container>
            </div>
            <div className='Overview__row'>
                <Container classNames='Container__full' style={{height: '300px'}}>
                    <div className='Overview__row'>
                        <p className='subtitle'>POTENTIAL CANDIDATE EXPOSURE</p>
                        <div className='Overview__pi--toggle'><span>Openings in remote: </span><ToggleBtn
                            onChange={setStatus}/></div>
                    </div>
                    <div className='Overview__row pi-charts--wrapper'>
                        {renderPiCharts(status)}
                    </div>
                    <div className='Overview__row'>
                        <img src={require('../../../assets/charts/pi/pi-indexes.svg')} alt="indexs"/>
                    </div>
                </Container>
            </div>
            <div className='Overview__row'>
                <Container classNames='Container__square-md'>
                    <p className='subtitle'>MONEY SAVED<span className='weight300'
                                                             style={{fontSize: '1.3rem'}}>/Quarterly</span></p>
                    <img src={moneySavedPiChart} alt="money saved chart"/>
                </Container>
                <Container classNames='Container__large'>
                    <p className='subtitle' style={{marginLeft: '30px', marginBottom: '7px'}}>CANDIDATES SOURCED BY
                        JOONKO</p>
                    <img src={candidateSourced} alt="candidate sourced"/>
                </Container>
            </div>
        </div>
    )
}

export default Overview;