import React from "react";
import {withRouter} from "react-router-dom";
import "./MenuItem.style.css";
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);