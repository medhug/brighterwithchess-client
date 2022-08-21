import '../QuizMemory/QuizMemory.scss';
import React, { Component } from 'react';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';

const question1state= {"fen":"4k3/p6b/1p6/4P3/5P2/8/8/B3K3 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};
const question2state= {"fen":"5rk1/R3bppp/2ppn3/1p2p3/4P3/2N2N2/1PnPBPPP/6K1 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};


class QuizMemory extends Component {
  state = {
    messageYes : [null,null,null,null],
    messageNo : [null,null,null,null],
    attempt: 0
  }

  handleUserAnswer = (response, questionID, skillIndex) => {
    if(response === true){
      this.props.handleProgressBars(true, questionID, skillIndex);

      let messageStatus = [null, null, null, null];
      messageStatus[questionID] = true;
      this.setState({
        messageYes : messageStatus
      })
    } else {
      let messageStatus = [null, null, null, null];
      messageStatus[questionID] = true;
      this.setState({
        messageNo : messageStatus
      })
    }

  }

  render(){

  if(this.props.userStatus === true){
    return (
        <main className="quizmemory">
          <div className="quizmemory-container">
            <h1 className="quizmemory-container__title">Test your Memory skills</h1>

            <div className="quizmemory-container__questionbox">
              <QuizBoard initialboard = {question1state} handleUserAnswer={this.handleUserAnswer} questionID={0} skill={'memory'}/>
              {this.state.messageYes[0]? <div className="messageYes">You did it!</div> : <></>}
              {this.state.messageNo[0]? <div className="messageNo">That's not correct...</div> : <></> }
              {this.state.messageNo[0]?<button className="reloadbutton" onClick={() => {window.location.reload();}}>Try Again</button> : <></> }
              <h3 className="quizmemory-container__questionbox--prompt">Question 1: What is the farthest square that the white bishop can move?</h3>
            </div>

            <div className="quizmemory-container__questionbox">
              <QuizBoard initialboard = {question2state} handleUserAnswer={this.handleUserAnswer} questionID={1} skill={'memory'}/>
              {this.state.messageYes[1]? <div className="messageYes">You did it!</div> : <></>}
              {this.state.messageNo[1]? <div className="messageNo">That's not correct...</div> : <></> }
              {this.state.messageNo[1]?<button className="reloadbutton" onClick={() => {window.location.reload();}}>Try Again</button> : <></> }
              <h3 className="quizmemory-container__questionbox--prompt">Question 2: Capture a piece using the white bishop</h3>
            </div>

          </div>
        </main>
    );  
  } else {
    return (
      <NotLoggedIn/>
    )
  }

  }
}
  
export default QuizMemory;