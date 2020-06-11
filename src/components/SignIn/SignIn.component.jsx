import React from "react";
import FormInput from "../FormInput/FormInput.component";
import "./SignIn.style.css";
class SignIn extends React.Component {
    state = { email: '', password: '' };
    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div className="signin">
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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default SignIn;