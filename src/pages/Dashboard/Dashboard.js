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

    let skillTableFromDatabase = {
      memory : "user_memory_progress",
      calculate : "user_calculation_progress",
      pattern : "user_pattern_recognition_progress"
    }

    if(this.props.userStatus === true){
      return (
          <main className="dashboard">
            <h1>Welcome back, !</h1>
            <h2>better be logged in</h2>

            <div>
              <ProgressBar skill={skillTableFromDatabase.memory}/>
              {/* <ProgressBar skill={skillTableFromDatabase.calculate}/>
              <ProgressBar skill={skillTableFromDatabase.pattern}/> */}
            </div>
          </main>
      );  
    } else {
      return (
        <main className="dashboard">
          <h1>Not logged in</h1>
        </main>
      )
    }
  }

}
  
export default Dashboard;