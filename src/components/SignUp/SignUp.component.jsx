import React from "react";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import "./SignUp.style.css";

class SignUp extends React.Component {
    state = { name: '', email: '', password: '', cpassword: '' };
    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onResetClick = () => {
        this.setState({name:'', email:'', password:'', cpassword:''});
    }
    render() {
        return (
            <div className="signup">
                <h2 className="title">Register with us, it's FREE</h2>
                <span>Sign Up with your email and password</span>
                <form>
                    <FormInput
                        handleChange={this.onInputChange}
                        value={this.state.name}
                        name="name"
                        label="Name"
                        type="text"
                        required="required" />
                    <FormInput
                        handleChange={this.onInputChange}
                        value={this.state.email}
                        name="email"
                        label="Email"
                        type="text"
                        required="required" />
                    <FormInput
                        handleChange={this.onInputChange}
                        value={this.state.password}
                        name="password"
                        label="Password"
                        type="password"
                        required="required" />
                    <FormInput
                        handleChange={this.onInputChange}
                        value={this.state.cpassword}
                        name="cpassword"
                        label="Confirm Password"
                        type="password"
                        required="required" />
                    <div className="button-container">
                        <CustomButton type="submit">Sign Up</CustomButton>
                        <CustomButton handleClick={this.onResetClick} type="reset" warning>RESET</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;