import React from "react";
import "./MenuItem.style.css";
const MenuItem = ({title, imageUrl}) => {
    return (
        <div className="menu-item" style={
            {
                backgroundImage:`url(${imageUrl})`
            }
        }>
            <div className="content">
                <h2>{title}</h2>
                <span>Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;