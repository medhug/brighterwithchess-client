import "../Login/Login.scss"
import {Component} from 'react';
import axios from 'axios';
import Input from "../../components/Input/Input";
import Dashboard from "../Dashboard/Dashboard";

const baseUrl = 'http://localhost:5050';
const loginUrl = `${baseUrl}/login`;


class Login extends Component {
    state = {
        isLoggedIn: false,
        isLoginError: false,
        errorMessage: '',
    };

    handleLogin = (e) => {
        e.preventDefault();
        console.log(e);
        axios
          .post(loginUrl, {
            email: e.target.email.value,
            password: e.target.password.value,
          })
          .then((response) => {
            console.log(response);
            sessionStorage.setItem('token', response.data.token);
            this.setState({
              isLoggedIn: true,
            });
          })
          .catch((err) => {
            console.log(err);
            this.setState({ isLoginError: true, errorMessage: err });
          });
    };

    render(){
        return (
            <>
                <main className="login-page">
                    <h1>Login</h1>

                    <form className="login" onSubmit={this.handleLogin}>
                    <Input type="text" name="email" label="Email" />
                    <Input type="text" name="password" label="Password" />
                    <button className="login__button">Log In</button>

                    {this.state.isLoggedIn && <div className="login__message">Logged in</div>}
                    {this.state.isLoginError && <div className="login__message">{this.state.errorMessage}</div>}
                    </form>
                </main>

                <div>{this.state.isLoggedIn && <Dashboard status={this.state.isLoggedIn}/>}</div>
            </>
        );  
    }

  }
  
  export default Login;