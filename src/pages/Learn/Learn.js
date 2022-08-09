import '../Learn/Learn.scss';
import {Component} from "react";
import ChoiceBlock from '../../components/ChoiceBlock/ChoiceBlock';
import { Link } from "react-router-dom";

class Learn extends Component {

  render(){

    console.log("from learn page", this.props.userStatus);

    if(this.props.userStatus === true){
      return (
          <main className="learn">
            <div className="learn-container">
              <h2 className="learn-container__title">What would you like to learn?</h2>
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/learn/memory"><ChoiceBlock category={1}/></Link>
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/learn/calculation"><ChoiceBlock category={2}/></Link>
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/learn/patterns"><ChoiceBlock category={3}/></Link>
            </div>
          </main>
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