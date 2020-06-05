import React from "react";
import MenuItem from "../MenuItem/MenuItem.component";

import "./Menu.style.css";
const Menu = ({ items }) => {
    return (
        <div className="menu-directory">
            {items.map(item => <MenuItem title={item.title} key={item.id} imageUrl={item.imageUrl}/>)}
        </div>
    )
};

export default Menu;