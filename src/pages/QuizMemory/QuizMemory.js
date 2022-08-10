import '../QuizMemory/QuizMemory.scss';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';

let messageYes= false;
let messageNo= false;

const question1state= {"fen":"4k3/p6b/1p6/4P3/5P2/8/8/B3K3 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};

function handleUserAnswer(response){
  console.log("found true?", response);

  if(response === true){
    messageYes = true;
  } 
  if(response === false){
    messageNo = true;
  }
}

function QuizMemory(props) {

  if(props.userStatus === true){
    return (
        <main className="quizmemory">
          <div className="quizmemory-container">
            <h1 className="quizmemory-container__title">Test your Memory skills</h1>

            <div className="quizmemory-container__questionbox">
              <QuizBoard initialboard = {question1state} handleUserAnswer={handleUserAnswer}/>
              {messageYes? <div className="messageYes">You did it!</div> : <></>}
              {messageNo? <div className="messageNo">That's not correct...</div> : <></>}
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
  
export default QuizMemory;