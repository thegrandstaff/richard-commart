import React from "react";
import "../App.css";
import { SideMenuData } from './SideMenuData';

function SideMenu() {
    return (
        <div className="sidemenu">
            <ul className="sidemenu-list">
                {SideMenuData.map((val, key) => {
                    return (
                        <li 
                        key={key} 
                        className="row" 
                        onClick={() => {
                            window.location.pathname = val.link
                        }}
                        >
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideMenu;