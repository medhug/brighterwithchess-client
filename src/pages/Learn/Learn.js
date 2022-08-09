import '../Learn/Learn.scss';
import {Component} from "react";
import ChoiceBlock from '../../components/ChoiceBlock/ChoiceBlock';
import { Link } from "react-router-dom";

class Learn extends Component {

  render(){

    console.log("from learn page", this.props.userStatus);

    if(this.props.userStatus === true){
      return (
          <>
            <h1>What would you like to learn?</h1>

            <Link to="/learn/memory"><ChoiceBlock category={1}/></Link>
            <Link to="/learn/calculation"><ChoiceBlock category={2}/></Link>
            <Link to="/learn/patterns"><ChoiceBlock category={3}/></Link>
            
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