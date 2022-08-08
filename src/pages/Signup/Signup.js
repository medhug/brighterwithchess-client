import '../Signup/Signup.scss';

import { Component } from "react";
import axios from "axios";
import Input from "../../components/Input/Input";


const baseUrl = 'http://localhost:5050';
const signupUrl = `${baseUrl}/signup`;

class Signup extends Component {
    state = {
        isSignedUp: false,
        errorMessage: null,
        success: false,
    };

    handleSignup = (e) => {
        e.preventDefault();
        console.log("signup clicked");
        axios
            .post(signupUrl, {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value,
            })
            .then((response) => {
            console.log(response);
            this.setState({
              isSignedUp: true,
              success: true
            });
            })
            .catch((err) => {
            console.log(err);
            this.setState({
                error: true
            })
            });
    };

    render() {
        return (
            <main className="signup-page">
                <h1>SignUp</h1>
                <form className="signup" onSubmit={this.handleSignup}>
                    <Input type="text" name="email" label="Email" />
                    <Input type="text" name="name" label="First name" />
                    <Input type="password" name="password" label="Password" />
                    <Input type="password" name="password2" label="Retype Password" />
                    <button className="signup__button">Sign up</button>

                    {this.state.success && <div className="signup__message">Signed up!</div>}
                    {this.state.error && <div className="signup__message">{this.state.error}</div>}
                </form>
            </main>
        );
    }
}

export default Signup;
