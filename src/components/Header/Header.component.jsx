import React from "react";
import {ReactComponent as Logo} from "../../assets/dessert.svg";
import "./Header.style.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-header">
                <Logo/>
            </div>
            <div className="menu-header">
                <a href="#">Shop</a>
                <a href="#">Contact</a>
                <a href="#">Sign In</a>
            </div>
        </div>
    )
};

export default Header;