import "../Login/Login.scss"
import {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Input from "../../components/Input/Input";

const baseUrl = 'http://localhost:5050/users/login';

class Login extends Component {
    state = {
        isLoginError: false,
        errorMessage: '',
    };

    componentDidMount(){
      console.log("login mounted");
      console.log("systemwide login state", this.props.userStatus);
    }
    
    handleLogin = (e) => {
      e.preventDefault();
      //console.log(e);

      if( !e.target.email.value || !e.target.password.value){
        this.setState({
            isLoginError : true,
            errorMessage : "Something is missing"
        })
        return
      } else {
        this.setState({
            errorMessage : null
        })
      }

      axios
        .post(baseUrl, {
          email: e.target.email.value,
          password: e.target.password.value,
        })
        .then((response) => {
          this.props.handleSystemWideLogIn();

          sessionStorage.setItem('token', response.data.token);
          this.setState({
            isLoginError : null
          })
          
        })
        .catch((err) => {
          console.log(err);
          this.setState({ isLoginError: true, errorMessage: "email or/and password incorrect" });
        });
    };

    render(){

      return (
          <>
              <main className="login-page">
                  <h1 className="login-page__title">Login</h1>

                  <form className="login-page__form" onSubmit={this.handleLogin}>
                  <Input type="text" name="email" label="Email" />
                  <Input type="password" name="password" label="Password" />
                  <button className="login-page__form--button">Log In</button>

                  {this.props.userStatus && <div className="login-page__form--message">Logged in</div>}
                  {this.props.userStatus && <Link to="/dashboard/user">
                      <div className="login-page__form--message">Go to dashboard</div></Link>}
                  {this.state.isLoginError && <div className="login-page__form--message">{this.state.errorMessage}</div>}
                  </form>
              </main>

          </>
      );  
    }

  }
  
  export default Login;