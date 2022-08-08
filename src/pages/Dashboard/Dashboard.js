import '../Dashboard/Dashboard.scss';
import {Component} from 'react';
// import axios from 'axios';
import ProgressBar from '../../components/ProgressBar/ProgressBar';


class Dashboard extends Component {
  state = {
    error: ""
  };git 

  componentDidMount(){
    console.log("page mounted");

    this.setState({
      isLoggedIn : this.props.location.state.isLoggedIn
    })

  }

  render(){

    let skillTableFromDatabase = {
      memory : "user_memory_progress",
      calculate : "user_calculation_progress",
      pattern : "user_pattern_recognition_progress"
    }

    if(this.state.isLoggedIn){
      return (
          <>
            <h1>Welcome back, !</h1>
            <h2>better be logged in</h2>

            <div>
              <ProgressBar skill={skillTableFromDatabase.memory}/>
              {/* <ProgressBar skill={skillTableFromDatabase.calculate}/>
              <ProgressBar skill={skillTableFromDatabase.pattern}/> */}
            </div>
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