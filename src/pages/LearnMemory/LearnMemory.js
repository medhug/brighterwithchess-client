import "../LearnMemory/LearnMemory.scss";
import { Component } from "react";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedin";
import bishopdrawing from "../../assets/images/BishopDrawing.png";
import bishopphoto from "../../assets/images/BishopPhoto.JPG";
import bishopmoves from "../../assets/images/bishopsmoves.jpg";
import bishopmoved from "../../assets/images/bishopmoved.jpg";
import bishopwillcapture from "../../assets/images/bishopwillcapture.jpg";
import bishopcaptured from "../../assets/images/bishopcaptured.jpg";

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
            <div className="learn-memory-container__movement">
              <img src={bishopmoves} alt="text3" className="learn-memory-container__movement--img" />
            </div>
            <p className="learn-memory-container__text">The bishop moves diagonally, like an X (above).</p>
            <p className="learn-memory-container__text">You can choose any one of the squares with a black dot.</p>
            <p className="learn-memory-container__text">It can move as many or a few squares as you want.</p>
            <p className="learn-memory-container__text">Note: The bishop cannot jump over other pieces.</p>
            <div className="learn-memory-container__movement">
              <img src={bishopmoved} alt="text4" className="learn-memory-container__movement--img" />
            </div>
            <p className="learn-memory-container__text">Did you see the bishop's new position (above)?</p>
            <p className="learn-memory-container__text">Let's memorize how the bishop captures, or takes, a piece.</p>
            <div className="learn-memory-container__movement">
              <img src={bishopwillcapture} alt="text5" className="learn-memory-container__movement--img" />
            </div>
            <p className="learn-memory-container__text">The bishop captures the black rook(the castle) by replacing the rook on it's square.</p>
            <div className="learn-memory-container__movement">
              <img src={bishopcaptured} alt="text3" className="learn-memory-container__movement--img" />
            </div>
            <p className="learn-memory-container__text">The rook has been captured (above).</p>
          </div>
        </main>
      );
    } else {
      return <NotLoggedIn />;
    }
  }
}

export default LearnMemory;
