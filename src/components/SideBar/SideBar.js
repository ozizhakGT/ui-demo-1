import React, {useCallback} from "react";
import './SideBar.scss';
import {NavLink} from 'react-router-dom'
import Icon from "../Icon/Icon";
import menu from "../../static/menu";

function SideBar() {
    const renderNavLinks = useCallback(() => {
        return menu.map(link => (
            <li key={link.id}>
                <NavLink to={link.path} className='SideBar__menu--item' activeClassName='SideBar__menu--item--selected'>
                    <div className='icon'><Icon icon={link.icon} /></div>
                    <span>{link.name}</span>
                </NavLink>
            </li>
        ))
    },[])

    return (
        <aside className='SideBar'>
            <div className='SideBar__greeting'>
                <div className='SideBar__hamburger' />
                <p>Joonko</p>
            </div>
            <ul className='SideBar__menu weight300'>
                {renderNavLinks()}
            </ul>
        </aside>
    )
}

export default SideBar;