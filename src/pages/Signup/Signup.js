import '../Signup/Signup.scss';

import { Component } from "react";
import axios from "axios";
import Input from "../../components/Input/Input";

class Signup extends Component {
    state = {
        error: "",
        success: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8080/api/users/register", {
                email: event.target.email.value,
                password: event.target.password.value,
                first_name: event.target.first_name.value,
            })
            .then(() => {
                this.setState({ success: true, error: "" });
                event.target.reset();
            })
            .catch((error) => {
                this.setState({ success: false, error: error.response ? error.response.data : error.message });
            });
    };

    render() {
        return (
            <main className="signup-page">
                <form className="signup" onSubmit={this.handleSubmit}>

                    <Input type="text" name="email" label="Email" />
                    <Input type="text" name="first_name" label="First name" />
                    <Input type="password" name="password" label="Password" />
                    <Input type="password2" name="password2" label="Repeat Password" />
                    <button className="signup__button">Sign up</button>

                    {this.state.success && <div className="signup__message">Signed up!</div>}
                    {this.state.error && <div className="signup__message">{this.state.error}</div>}
                </form>
            </main>
        );
    }
}

export default Signup;
