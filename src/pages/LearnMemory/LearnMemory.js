import '../LearnMemory/LearnMemory.scss';
import {Component} from "react";

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
        <>
          <h1>Not logged in</h1>
        </>
      )
    }
  }

}
  
export default LearnMemory;