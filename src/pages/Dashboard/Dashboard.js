import '../Dashboard/Dashboard.scss';
import {Component} from 'react';
// import axios from 'axios';
import ProgressBar from '../../components/ProgressBar/ProgressBar';


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
              <h1>Welcome back, !</h1>
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
        <main className="dashboard">
          <div className="dashboard-container">
            <h1>Not logged in</h1>
          </div>
        </main>
      )
    }
  }

}
  
export default Dashboard;