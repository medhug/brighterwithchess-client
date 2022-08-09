import '../Learn/Learn.scss';
import {Component} from "react";
import ChoiceBlock from '../../components/ChoiceBlock/ChoiceBlock';

class Learn extends Component {

  render(){

    console.log("from learn page", this.props.userStatus);

    if(this.props.userStatus === true){
      return (
          <>
            <h1>What would you like to learn?</h1>

            <ChoiceBlock category={1}/>
            <ChoiceBlock category={2}/>
            <ChoiceBlock category={3}/>
            
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
  
export default Learn;