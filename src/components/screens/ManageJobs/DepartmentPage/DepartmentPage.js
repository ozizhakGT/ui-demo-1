import React, {useState} from "react";
import { useParams, useRouteMatch, Link} from 'react-router-dom'
import './DepartmentPage.scss';
import ProgressBar from "../../../ProgressBar/ProgressBar";
import DropDown from "../../../DropDown/DropDown";
import DataTable, {Column, HeadRow} from "../../../DataTable/DataTable";
import Icon from "../../../Icon/Icon";
import CheckBox from "../../../CheckBox/CheckBox";
import JobData from "../JobTable/JobTable";
import {data} from "../../../../static/tableData";
import locations from "../../../../static/locations";

const DepartmentPage = () => {
    const [toggleFilter, setToggleFilter] = useState(false);
    const {url} = useRouteMatch();
    const {departmentName, jobName} = useParams();
    const pathArr = (url.substring(1).split('/'))

    const renderPathName = () => (
        <p>
            <Link to={('/manage-jobs')}>Manage Jobs </Link>&nbsp; > &nbsp;<Link to={`/manage-jobs/department/${departmentName}`}>{departmentName}</Link>
            {pathArr[pathArr.length] !== jobName && <span>&nbsp; > &nbsp;</span>}
            {pathArr[pathArr.length-1] !== departmentName ? <Link to={false}>Java Developer</Link> : ''}
        </p>
    )

    const onToggleFilter = () => setToggleFilter(!toggleFilter);

    return (
        <div className='DepartmentPage'>
            <div className='DepartmentPage__routes'>
                <div className='DepartmentPage__routes--headline'>
                    <p className='title weight500'>{departmentName}</p>
                    <div className='DepartmentPage__routes--links'>{renderPathName()}</div>
                </div>
                <div className='DepartmentPage__routes--progress-bar'>
                    <p>Money saved goal</p>
                    <ProgressBar icon='dollar' complete='72%'/>
                </div>
            </div>
            <div className='DepartmentPage__search'>
                <div className='DepartmentPage__search--input'>
                    <div className='DepartmentPage__search--toggle' onClick={onToggleFilter}>
                        <div>
                            <Icon icon='filter'/>
                            <span>Filter</span>
                        </div>
                        <span className={`${toggleFilter && 'DepartmentPage__search--toggle-open'}`}>&#8964;</span>
                    </div>
                    <input placeholder='Search by job name, location, seniority' type="text"
                           style={!toggleFilter ? {borderBottom: 'none'} : {}}/>
                </div>
                <div className={`DepartmentPage__search--filter ${toggleFilter && 'open-filter'}`}>
                    {toggleFilter && <>
                    <DropDown width='250px' label='Location' placeholder='Choose location' options={locations} />
                    <DropDown width='250px' label='Seniority' placeholder='Choose seniority'/>
                    <DropDown width='250px' label='Job title' placeholder='Choose job title'/>
                    </>}
                </div>
            </div>
            <div className='DepartmentPage__save'>
                <p>294 (Remote) / 840 (All)</p>
                <button>Save</button>
            </div>
            <DataTable>
                <HeadRow>
                    <Column align='center' size='small'>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckBox themeColor='#707070'/>
                            <span>
                                <DropDown placeholder='' border='none' optionsWidth='180px' isCloseOnChoose={false}>
                                    <li style={{justifyContent: 'flex-start'}}><CheckBox /> <span style={{paddingLeft: '5px'}}>All</span></li>
                                    <li style={{justifyContent: 'flex-start'}}><CheckBox /> <span style={{paddingLeft: '5px'}}>Optimal</span></li>
                                    <li style={{justifyContent: 'flex-start'}}><CheckBox /> <span style={{paddingLeft: '5px'}}>Highly recommended</span></li>
                                </DropDown>
                            </span>
                        </div>
                        </Column>
                    <Column size='large'>Job title</Column>
                    <Column size='large'/>
                    <Column align='center' size='medium'>Potential Savings</Column>
                    <Column align='center' size='medium'>Potential Exposure</Column>
                    <Column align='center' size='medium'>Location</Column>
                </HeadRow>
                <div className='DataTable__body'>
                    {jobName && <JobData data={data[jobName]}/>}
                    {!jobName && <JobData data={data[departmentName]} path={url} />}
                </div>
            </DataTable>
        </div>
    )
}

export default DepartmentPage;