import '../Learn/Learn.scss';
import {Component} from "react";
import ChoiceBlock from '../../components/ChoiceBlock/ChoiceBlock';
import { Link } from "react-router-dom";
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';

class Learn extends Component {

  render(){

    console.log("from learn page", this.props.userStatus);

    if(this.props.userStatus === true){
      return (
          <main className="learn">
            <div className="learn-container">
              <h2 className="learn-container__title">What would you like to learn?</h2>
              <Link to="/learn/memory" style={{ textDecoration: 'none', color: 'black' }}><ChoiceBlock category={1}/></Link>
              <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><ChoiceBlock category={2}/></Link>
              <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><ChoiceBlock category={3}/></Link>

            </div>
          </main>
      );  
    } else {
      return (
        <NotLoggedIn />
      )
    }
  }

}
  
export default Learn;