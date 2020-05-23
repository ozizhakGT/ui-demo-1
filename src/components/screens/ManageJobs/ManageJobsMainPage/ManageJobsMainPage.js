import React from "react";
import './ManageJobsMainPage.scss';
import {useRouteMatch,} from 'react-router-dom';
import ProgressBar from "../../../ProgressBar/ProgressBar";
import departments from "../../../../static/departments";
import DepartmentBox from "./DepartmentBox/DepartmentBox";

const ManageJobsMainPage = () => {
    const {path} = useRouteMatch();

    const renderDepartmentBox = () => departments.map(department => <DepartmentBox department={department} path={path} key={department.id} />);

    return (
        <div className='ManageJobsMainPage'>
            <div className='ManageJobsMainPage__headline'>
                <div className='ManageJobsMainPage__headline--overlay' />
                <ul className='ManageJobsMainPage__navbar weight700'>
                    <li className='ManageJobsMainPage__navbar-item ManageJobsMainPage__navbar-item--active'><span>Departments</span></li>
                    <li className='ManageJobsMainPage__navbar-item'>Location</li>
                    <li className='ManageJobsMainPage__navbar-item'>Seniority</li>
                </ul>
                <div className='ManageJobsMainPage__progress-bar'>
                    <p>Money saved goal</p>
                    <ProgressBar icon='dollar' complete='72%' />
                </div>
            </div>
            <div className='ManageJobsMainPage__wrapper'>
                {renderDepartmentBox()}
            </div>
        </div>
    )
}

export default ManageJobsMainPage;