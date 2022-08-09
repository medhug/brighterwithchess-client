import '../QuizMemory/QuizMemory.scss';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';


const state1= {"fen":"4k3/p6b/1p6/4P3/5P2/8/8/B3K3 w - - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]};
const state3 = {"fen":"8/2r1b2k/8/6p1/6P1/2N5/6K1/8 w KQkq - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]}

function QuizMemory(props) {
    if(props.userStatus === true){
      return (
          <main className="quizmemory">
            <div className="quizmemory-container">
              <h1 className="quizmemory-container__title">Test your Memory skills</h1>

              <div className="quizmemory-container__questionbox">
                <h3 className="quizmemory-container__questionbox--prompt">Question 1: Drag the white bishop to the farthest square it can move. White to move</h3>
                <QuizBoard initialboard = {state1}/>
              </div>

              <div className="quizmemory-container__questionbox">
                <h3>Black to move</h3>
                <QuizBoard initialboard = {state3}/>
              </div>

              <div className="quizmemory-container__questionbox">
                <h3>Black to move</h3>
                <QuizBoard initialboard = {state3}/>
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