import "../Login/Login.scss"
import {Component} from 'react';
import axios from 'axios';

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
            username: e.target.username.value,
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
                <div>
                    <h1>Login</h1>
                    {isLoginError && <label style={{ color: 'red' }}>{errorMessage}</label>}
                    <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        Username: <input type="text" name="username" />
                    </div>
                    <div className="form-group">
                        Password: <input type="password" name="password" />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                    </form>
                </div>
            </>
        );  
    }

  }
  
  export default Login;