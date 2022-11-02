import "../QuizMemory/QuizMemory.scss";
import React, { Component } from "react";
import QuizBoard from "../../components/QuizBoard/QuizBoard";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedin";

class QuizMemory extends Component {
  state = {
    messageYes: [null, null, null, null],
    messageNo: [null, null, null, null],
    attempt: 0,
  };

  handleUserAnswer = (response, questionID) => {
    if (response === true) {
      let messageStatus = [null, null, null, null];
      messageStatus[questionID] = true;
      this.setState({
        messageYes: messageStatus,
      });
    } else {
      let messageStatus = [null, null, null, null];
      messageStatus[questionID] = true;
      this.setState({
        messageNo: messageStatus,
      });
    }
  };

  render() {
    if (this.props.userStatus === true) {
      return (
        <main className="quizmemory">
          <div className="quizmemory-container">
            <h1 className="quizmemory-container__title">
              Test your Memory skills
            </h1>

            <div className="quizmemory-container__questionbox">
              <QuizBoard
                initialboard={"M1"}
                handleUserAnswer={this.handleUserAnswer}
              />
              {this.state.messageYes[0] ? (
                <div className="messageYes">You did it!</div>
              ) : (
                <></>
              )}
              {this.state.messageNo[0] ? (
                <div className="messageNo">That's not correct...</div>
              ) : (
                <></>
              )}
              {this.state.messageNo[0] ? (
                <button
                  className="reloadbutton"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Try Again
                </button>
              ) : (
                <></>
              )}
              <h3 className="quizmemory-container__questionbox--prompt">
                Question 1: What is the farthest square that the white bishop
                can move?
              </h3>
            </div>

            <div className="quizmemory-container__questionbox">
              <QuizBoard
                initialboard={"M2"}
                handleUserAnswer={this.handleUserAnswer}
              />
              {this.state.messageYes[1] ? (
                <div className="messageYes">You did it!</div>
              ) : (
                <></>
              )}
              {this.state.messageNo[1] ? (
                <div className="messageNo">That's not correct...</div>
              ) : (
                <></>
              )}
              {this.state.messageNo[1] ? (
                <button
                  className="reloadbutton"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Try Again
                </button>
              ) : (
                <></>
              )}
              <h3 className="quizmemory-container__questionbox--prompt">
                Question 2: Capture a piece using the white bishop
              </h3>
            </div>
          </div>
        </main>
      );
    } else {
      return <NotLoggedIn />;
    }
  }
}

export default QuizMemory;
