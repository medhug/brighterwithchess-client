import '../QuizMemory/QuizMemory.scss';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';


let q1Congrats = false;
let q1TryAgain = false;

const question1state= {"fen":"4k3/p6b/1p6/4P3/5P2/8/8/B3K3 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};



function handleUserAnswer(response){
  console.log("found true?", response);

  if(response === true){
    console.log(q1Congrats);
    q1Congrats = true;
  } 
  if(response === false){
    console.log(q1TryAgain);
    q1TryAgain = true;
  }
}

function QuizMemory(props) {
    if(true){
      return (
          <main className="quizmemory">
            <div className="quizmemory-container">
              <h1 className="quizmemory-container__title">Test your Memory skills</h1>

              <div className="quizmemory-container__questionbox">
                <h3 className="quizmemory-container__questionbox--prompt">Question 1: Remember how bishops move? Drag the white bishop to the farthest square that it can move. White to move</h3>
                <QuizBoard initialboard = {question1state} handleUserAnswer={handleUserAnswer}/>
                {{q1Congrats} && <div className="messageYes">You did it!</div>}
                {{q1TryAgain} && <div className="messageNo">Please try again...</div>}
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