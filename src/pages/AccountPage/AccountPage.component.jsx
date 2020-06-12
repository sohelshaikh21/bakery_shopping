import React from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";
import "./AccountPage.style.css";

const AccountPage = () => {
    return (
        <div className="account-page">
            <SignIn/>
            <SignUp/>
        </div>
    )
};

export default AccountPage;