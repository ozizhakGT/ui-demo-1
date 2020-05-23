import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {BodyRow, Column} from "../../../DataTable/DataTable";
import CheckBox from "../../../CheckBox/CheckBox";
import {IsRecommended} from "../../../../services/IsRecommendedService";
import {renderRank} from "../../../../services/rankService";
import Loader from "../../../Loader/Loader";


const JobData = ({data,path}) => {
    const [tableLoading, setTableLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setTableLoading(false)
        }, 1500);
    }, [])

    return ( <>
        {!tableLoading ? data.map((row, i) => (
            <BodyRow key={i}>
                <Column align='center' size='small'><CheckBox defaultVal={row.is_remote}/></Column>
                <Column size='large' style={{alignSelf: 'flex-end'}}>
                    <div>
                        <p style={{
                            fontSize: '1.5rem',
                            marginBottom: '10px'
                        }}>{row.job_title} {row.quantity_all && <span>({row.quantity_remote}/{row.quantity_all})</span>}</p>
                        {row.quantity_all && <Link to={row.job_title === 'Java Developer' ? `${path}/jobs/${row.job_title.split(' ').join('')}` : false} style={{color: '#707070', fontSize: '1.3rem', textDecoration: 'underline'}}>See all jobs</Link>}
                        {row.level && <span style={{color: '#707070', fontSize: '1.3rem'}}>{row.level}</span>}
                    </div>
                </Column>
                <Column align='center' size='large'>{row.is_recommended && <IsRecommended/>}</Column>
                <Column align='center' size='medium'>
                    <div style={{
                        width: '30%',
                        fontSize: '1.3rem',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {renderRank(row.potenial_saving_rank, 'dollar', {width: '17px'})}
                    </div>
                </Column>
                <Column align='center' size='medium'>
                    <div style={{
                        width: '45%',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {renderRank(row.potenial_exposure_rank, 'user', {width: '12px'})}
                    </div>
                </Column>
                <Column align='center' size='medium' style={{fontSize: '1.2rem'}}>{row.location}</Column>
            </BodyRow>
        )) : <div style={{textAlign: 'center', marginTop: '50px', fontSize: '1.6rem'}}><Loader /></div>}
    </>
)}

export default JobData;