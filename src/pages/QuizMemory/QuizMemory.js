import '../QuizMemory/QuizMemory.scss';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';

let q1Congrats = false;
let q1TryAgain = false;

const question1state= {"fen":"4k3/p6b/1p6/4P3/5P2/8/8/B3K3 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};
const question1answer={"fen":"4k3/p6b/1p6/4P3/3B1P2/8/8/4K3 b - - 1 1","dropSquareStyle":{},"squareStyles":{"":{"backgroundColor":"rgba(255, 255, 0, 0.4)"}},"pieceSquare":"","square":"","history":[{"color":"w","from":"a1","to":"d4","flags":"n","piece":"b","san":"Bd4"}]}
const state3 = {"fen":"8/2r1b2k/8/6p1/6P1/2N5/6K1/8 w KQkq - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]}

function handleUserAnswer(response, answer){

  if(response === answer){
    console.log("you got it right!")
    q1Congrats = true;
  } else {
    console.log("you got it wrong...")
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