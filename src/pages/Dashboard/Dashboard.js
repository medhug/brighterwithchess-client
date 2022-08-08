import '../Dashboard/Dashboard.scss';
import {Component} from 'react';
import axios from 'axios';


class Dashboard extends Component {
  state = {
    error: ""
  };

  componentDidMount(){
    console.log("page mounted");

    this.setState({
      isLoggedIn : this.props.location.state.isLoggedIn
    })

  }

  render(){
    console.log("==>", this.props.location.state);

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