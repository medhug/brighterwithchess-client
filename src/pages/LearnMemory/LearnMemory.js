import '../LearnMemory/LearnMemory.scss';
import {Component} from "react";
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';

class LearnMemory extends Component {

  render(){

    console.log("from learn memory", this.props.userStatus);

    if(this.props.userStatus === true){
      return (
          <>
            <h1>Lesson 1</h1>


            
          </>
      );  
    } else {
      return (
        <NotLoggedIn/>
      )
    }
  }

}
  
export default LearnMemory;