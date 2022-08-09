import '../Quiz/Quiz.scss';
import QuizBoard from '../../components/QuizBoard/QuizBoard';
import NotLoggedIn from '../../components/NotLoggedIn/NotLoggedin';


const state2= {"fen":"rnb1k1nr/ppppqppQ/8/2b1p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4","dropSquareStyle":{"boxShadow":"inset 0 0 1px 4px rgb(255, 255, 0)"},"squareStyles":{"h7":{"backgroundColor":"rgba(255, 255, 0, 0.4)"},"h5":{"backgroundColor":"rgba(255, 255, 0, 0.4)"}},"pieceSquare":"h7","square":"","history":[{"color":"w","from":"e2","to":"e4","flags":"b","piece":"p","san":"e4"},{"color":"b","from":"e7","to":"e5","flags":"b","piece":"p","san":"e5"},{"color":"w","from":"f1","to":"c4","flags":"n","piece":"b","san":"Bc4"},{"color":"b","from":"f8","to":"c5","flags":"n","piece":"b","san":"Bc5"},{"color":"w","from":"d1","to":"h5","flags":"n","piece":"q","san":"Qh5"},{"color":"b","from":"d8","to":"e7","flags":"n","piece":"q","san":"Qe7"},{"color":"w","from":"h5","to":"h7","flags":"c","piece":"q","captured":"p","san":"Qxh7"}]};
const state3 = {"fen":"8/2r1b2k/8/6p1/6P1/2N5/6K1/8 w KQkq - 0 1","dropSquareStyle":{},"squareStyles":{},"pieceSquare":"","square":"","history":[]}

function Quiz() {
    if(this.props.userStatus === true){
      return (
          <>
            <h1>Quiz 1</h1>
            <div className="quiz">
              <h1>Test your memory skills</h1>
              <h3>Black to move</h3>
              <QuizBoard initialboard = {state2}/>

              <h3>white to move</h3>
              <QuizBoard initialboard = {state3}/>
            </div>
          </>
      );  
    } else {
      return (
        <NotLoggedIn/>
      )
    }




  }
  
  export default Quiz;