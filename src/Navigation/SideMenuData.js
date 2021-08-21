import React from 'react';
import {FaDonate, FaHome, FaPaintBrush} from 'react-icons/fa';

//export the array of sidemenu titles
export const SideMenuData = [
    {
        title: "Home",
        icon: <FaHome />,
        link: "/home"
    },
    {
        title: "Artists",
        icon: <FaPaintBrush/>,
        link: "/artists"
    },
    {
        title: "Commissions",
        icon: <FaDonate/>,
        link: "/list-of-commissions"
    }
]