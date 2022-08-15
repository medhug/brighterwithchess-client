import '../QuizMemory/QuizMemory.scss';
import React, { Component } from 'react';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';

const question1state= {"fen":"4k3/p6b/1p6/4P3/5P2/8/8/B3K3 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};


class QuizMemory extends Component {
  state = {
    messageYes : false,
    messageNo : false,
    attempt: 0
  }

  handleUserAnswer = (response) => {

    if(response === true){
      this.props.handleProgressBars(true,0,0);

      this.setState({
        messageYes : true
      })
    } else {
      this.setState({
        messageNo : true
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
              <QuizBoard initialboard = {question1state} handleUserAnswer={this.handleUserAnswer}/>
              {this.state.messageYes? <div className="messageYes">You did it!</div> : <></>}
              {this.state.messageNo? <div className="messageNo">That's not correct...</div> : <></> }
              {this.state.messageNo?<button className="reloadbutton" onClick={() => {window.location.reload();}}>Try Again</button> : <></> }
              <h3 className="quizmemory-container__questionbox--prompt">Question 1: What is the farthest square that the white bishop can move?</h3>
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