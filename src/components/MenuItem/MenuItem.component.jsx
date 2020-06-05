import React from "react";
import "./MenuItem.style.css";
const MenuItem = ({title}) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h2>{title}</h2>
                <span>Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;