import '../QuizMemory/QuizMemory.scss';
import React, { Component } from 'react';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';


const question1state= {"fen":"4k3/p6b/1p6/4P3/5P2/8/8/B3K3 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};


class QuizMemory extends Component {
  state = {
    messageYes : false,
    messageNo : false
  }

  handleUserAnswer = (response) => {
    console.log("found true?", response);

    if(response === true){
      this.setState({
        messageYes : true
      })
    } else {
      console.log("setting message no to true");
      this.setState({
        messageNo : true
      })
    }

  }


  // componentDidUpdate(prevProp, prevState){
  //   if()

  // }
  render(){

  if(true){
    return (
        <main className="quizmemory">
          <div className="quizmemory-container">
            <h1 className="quizmemory-container__title">Test your Memory skills</h1>

            <div className="quizmemory-container__questionbox">
              <QuizBoard initialboard = {question1state} handleUserAnswer={this.handleUserAnswer}/>
              {this.state.messageYes? <div className="messageYes">You did it!</div> : <></>}
              {this.state.messageNo? <div className="messageNo">That's not correct...</div> : <></> }
              <h3 className="quizmemory-container__questionbox--prompt">Question 1: Remember how bishops move? Click and drop the white bishop to the farthest square that it can move. White to move</h3>
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