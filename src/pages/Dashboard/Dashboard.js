import '../Dashboard/Dashboard.scss';
import {Component} from 'react';
// import axios from 'axios';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';


class Dashboard extends Component {
  state = {
    error: ""
  }

  componentDidMount(){
    console.log("dashboard mounted");
    console.log("systemwide login state", this.props.userStatus);

  }

  render(){

    if(this.props.userStatus === true){
      return (
          <main className="dashboard">
            <div className="dashboard-container">
              <h1>Welcome back, Hugo!</h1>
              <div className="dashboard-container__progressbars" >
                <ProgressBar tableName={"Memory Progress"}/>
                <ProgressBar tableName={"Calculate Progress"}/>
                <ProgressBar tableName={"Pattern Progress"}/>
              </div>
            </div>
          </main>
      );  
    } else {
      return (
        <NotLoggedIn/>
      )
    }
  }

}
  
export default Dashboard;