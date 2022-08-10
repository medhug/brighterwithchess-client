import "../LearnMemory/LearnMemory.scss";
import { Component } from "react";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedin";
import bishop from "../../assets/images/bishop.jpg";

class LearnMemory extends Component {
  render() {
    console.log("from learn memory", this.props.userStatus);

    if (this.props.userStatus === true) {
      return (
        <main className="dashboard">
          <div className="dashboard-container">
            <h1>Lesson 1</h1>
            <h3>Let's memorize how the bishop moves.</h3>
            <div>
              <img src={bishop} alt="text" />
            </div>
          </div>
        </main>
      );
    } else {
      return <NotLoggedIn />;
    }
  }
}

export default LearnMemory;
