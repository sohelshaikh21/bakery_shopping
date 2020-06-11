import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/dessert.svg";
import "./Header.style.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-header">
                <Link to="/">
                    <Logo/>
                </Link>
            </div>
            <div className="menu-header">
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    )
};

export default Header;