import '../Dashboard/Dashboard.scss';
import {Component} from 'react';
import axios from 'axios';
import Input from "../../components/Input/Input";

const baseUrl = 'http://localhost:5050';
const loginUrl = `${baseUrl}/login`;


class Dashboard extends Component {
  state = {
      isLoggedIn: false,

  };



  render(){
    if(this.state.isLoggedIn){
      return (
          <>
              <h1>better be logged in</h1>
          </>
      );  
    } else {
      return (
        <>
          <h1>Not logged in</h1>
        </>
      )
    }
  }

}
  
export default Dashboard;