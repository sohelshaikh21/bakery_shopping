import React from "react";
import MenuItem from "../MenuItem/MenuItem.component";

import "./Menu.style.css";
const Menu = () => {
return (
    <div className="menu-directory">
        <MenuItem title="Baked Foods"/>
        <MenuItem title="Cup Cakes"/>
        <MenuItem title="Cookies"/>
        <MenuItem title="Brownie"/>
        <MenuItem title="Cakes"/>
    </div>
)
};

export default Menu;