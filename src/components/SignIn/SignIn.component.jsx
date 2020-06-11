import React from "react";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import "./SignIn.style.css";
class SignIn extends React.Component {
    state = { email: '', password: '' };
    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div className="signin">
                <h2 className="title">Already have an account with us?</h2>
                <span>Use the form below to Sign In</span>
                <form>
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
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton secondary>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;