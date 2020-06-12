import React from "react";
import "./CustomButton.style.css";
const CustomButton = ({ handleClick, children, ...otherProps }) => {
    return <button
        onClick={handleClick}
        className={`${otherProps.secondary ? 'secondary' : ''} ${otherProps.warning ? 'warning':''} custom-button`}
        {...otherProps}>
        {children}
    </button>;
}

export default CustomButton;