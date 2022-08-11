import "../LearnMemory/LearnMemory.scss";
import { Component } from "react";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedin";
import bishopdrawing from "../../assets/images/BishopDrawing.png";
import bishopphoto from "../../assets/images/BishopPhoto.JPG";

class LearnMemory extends Component {
  render() {
    console.log("from learn memory", this.props.userStatus);

    if (this.props.userStatus === true) {
      return (
        <main className="learn-memory">
          <div className="learn-memory-container">
            <h1 className="learn-memory-container__title">Lesson 1</h1>
            <p className="learn-memory-container__text">Let's meet the bishop:</p>
            <div className="learn-memory-container__pictures">
              <img src={bishopdrawing} alt="text1" className="learn-memory-container__pictures--img" />
              <img src={bishopphoto} alt="text2" className="learn-memory-container__pictures--img"/>
            </div>
            <p className="learn-memory-container__text">Let's memorize how the bishop moves.</p>
            <div>
              {/* <img src={} alt="text3" /> */}
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
