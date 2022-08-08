import "../Login/Login.scss"
import {Component} from 'react';
import axios from 'axios';
import Input from "../../components/Input/Input";

const baseUrl = 'http://localhost:8080';
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
            name: e.target.username.value,
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
        const { isLoginError, errorMessage } = this.state;
        return (
            <>
                <main className="login-page">
                    <h1>Login</h1>
                    {isLoginError && <label style={{ color: 'red' }}>{errorMessage}</label>}

                    <form className="login" onSubmit={this.handleLogin}>
                    <Input type="text" name="email" label="Email" />
                    <Input type="text" name="password" label="Password" />
                    <button className="login__button">Log In</button>
                    </form>
                </main>
            </>
        );  
    }

  }
  
  export default Login;