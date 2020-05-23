import React from "react";
import './DepartmentBox.scss';
import {Link} from "react-router-dom";
import Container from "../../../../Container/Container";
import {renderRank} from "../../../../../services/rankService";
import {IsRecommended} from "../../../../../services/IsRecommendedService";

const DepartmentBox = ({department, path}) => {
    return (
        <Container>
            <Link to={department.name === 'STEM' ? `${path}/department/${department.name}` : '#'} className='DepartmentBox'>
                <div className='DepartmentBox--headline'>
                    <p className='DepartmentBox--headline-title weight500'>{department.name}</p>
                    {department.is_recommended && <IsRecommended />}
                </div>
                <div className='DepartmentBox--rank'>
                    <div className='DepartmentBox--rank-score'>{renderRank(department.exposure, 'user')}
                        <span>({department.number_exposure})</span></div>
                    <span className='DepartmentBox__bullet'>&#8226;</span>
                    <span>Increase exposure : {department.increase_exposure}</span>
                </div>
                <div className='DepartmentBox--money-saved'><span>Potential saving:&nbsp; </span>{renderRank(department.money_saved, 'dollar')}</div>
                <div className='DepartmentBox--info weight500'>
                    <div className='DepartmentBox--info-total-jobs'><span>{department.total_jobs} </span>Jobs</div>
                    <span className='DepartmentBox__bullet'>&#8226;</span>
                    <div className='DepartmentBox--info-current'><span>{department.currently_remote} </span>Currently remote
                    </div>
                    <span className='DepartmentBox__bullet'>&#8226;</span>
                    <div className='DepartmentBox--info-potential'><span>{department.potential_remote} </span>Potential remote</div>
                </div>
            </Link>
        </Container>
    )
}

export default DepartmentBox;