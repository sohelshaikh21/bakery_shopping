import React from "react";
import MenuItem from "../MenuItem/MenuItem.component";

import "./Menu.style.css";
const Menu = ({ items }) => {
    return (
        <div className="menu-directory">
            {items.map(({id, ...item}) => <MenuItem key={id} {...item}/>)}
        </div>
    )
};

export default Menu;