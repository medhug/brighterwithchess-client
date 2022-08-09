import '../Quiz/Quiz.scss';
import {Component} from "react";
import ChoiceBlock from '../../components/ChoiceBlock/ChoiceBlock';
import { Link } from "react-router-dom";
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';

class Quiz extends Component {

  render(){

    console.log("from quiz page", this.props.userStatus);

    if(this.props.userStatus === true){
      return (
          <main className="learn">
            <div className="learn-container">
              <h2 className="learn-container__title">What would you like to quiz?</h2>
              <Link to="/quiz/memory" style={{ textDecoration: 'none', color: 'black' }}><ChoiceBlock category={4}/></Link>
              <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><ChoiceBlock category={5}/></Link>
              <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><ChoiceBlock category={6}/></Link>

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
  
export default Quiz;