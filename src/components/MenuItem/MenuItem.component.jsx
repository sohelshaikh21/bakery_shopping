import React from "react";
import "./MenuItem.style.css";
const MenuItem = ({ title, imageUrl, size }) => {
    return (

        <div className={`${size} menu-item`}>
            <div style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            } className="menu-background"></div>
            <div className="content">
                <h2>{title}</h2>
                <span>Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;