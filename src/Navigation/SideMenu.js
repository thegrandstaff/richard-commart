import React from "react";
import * as FaIcons from "react-icons";
import SideMenuData from "./SideMenuData";
import {Link} from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className="main-sidebar">
            <Link to="#" className='menu-bars'>
                <h2>HOME</h2>
            </Link>
        </div>
    )
};

export default SideMenu;