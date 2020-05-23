import React from "react";
import './ManageJobs.scss';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import ManageJobsMainPage from "./ManageJobsMainPage/ManageJobsMainPage";
import DepartmentPage from "./DepartmentPage/DepartmentPage";

const ManageJobs = () => {
    const {path} = useRouteMatch();

    return (
        <div className='ManageJobs'>
                <Switch>
                    <Route exact path={path} render={() => <ManageJobsMainPage /> } />
                    <Route exact path={`${path}/department/:departmentName`} render={ () => <DepartmentPage /> } />
                    <Route exact path={`${path}/department/:departmentName/jobs/:jobName`} render={ () => <DepartmentPage /> } />
                    <Route exact path='**'><Redirect to={path} /></Route>
                </Switch>
        </div>
    )
}

export default ManageJobs;