import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chess } from "chess.js"; 
import Chessboard from "chessboardjsx";


let stateObj;
let historyisEmpty;
let pickupStateFen;

const question1answer={"fen":"4k3/p6b/1p6/4P3/3B1P2/8/8/4K3 b - - 1 1"}

class HumanVsHuman extends Component {
  static propTypes = { children: PropTypes.func };

  state = {
  };


  componentDidMount() {
    //console.log(this.props.initialboard);
    //console.log("mounted");
    this.setState(
      this.props.initialboard
    )
    this.game = new Chess(this.props.initialboard.fen);

    historyisEmpty = stateObj ? false : undefined;
  }

  componentDidUpdate(){
    historyisEmpty = stateObj.length > 0;
    if(historyisEmpty){
      pickupStateFen = this.state.fen;
      console.log("first pickup", pickupStateFen);
      this.handleStuff();
    }
    
  }

  handleStuff = () => {
    console.log("stuffworks");

    if(pickupStateFen === question1answer.fen){
      this.props.handleUserAnswer(true);
    }

    
  }

  // keep clicked square style and remove hint squares
  removeHighlightSquare = () => {
    this.setState(({ pieceSquare, history }) => ({
      squareStyles: squareStyling({ pieceSquare, history })
    }));
  };

  // show possible moves
  highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                "radial-gradient(circle, #fffc00 36%, transparent 40%)",
              borderRadius: "50%"
            }
          },
          ...squareStyling({
            history: this.state.history,
            pieceSquare: this.state.pieceSquare
          })
        };
      },
      {}
    );

    this.setState(({ squareStyles }) => ({
      squareStyles: { ...squareStyles, ...highlightStyles }
    }));
  };

  onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q" // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;
    this.setState(({ history, pieceSquare }) => ({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      squareStyles: squareStyling({ pieceSquare, history })
    }));
  };

  onMouseOverSquare = square => {
    // get list of possible moves for this square
    let moves = this.game.moves({
      square: square,
      verbose: true
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    this.highlightSquare(square, squaresToHighlight);
  };

  onMouseOutSquare = square => this.removeHighlightSquare(square);

  // central squares get diff dropSquareStyles
  onDragOverSquare = square => {
    this.setState({
      dropSquareStyle:
        square === "e4" || square === "d4" || square === "e5" || square === "d5"
          ? { backgroundColor: "cornFlowerBlue" }
          : { boxShadow: "inset 0 0 1px 4px rgb(255, 255, 0)" }
    });
  };

  onSquareClick = square => {
    this.setState(({ history }) => ({
      squareStyles: squareStyling({ pieceSquare: square, history }),
      pieceSquare: square
    }));

    let move = this.game.move({
      from: this.state.pieceSquare,
      to: square,
      promotion: "q" // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    this.setState({
      fen: this.game.fen(),
      history: this.game.history({ verbose: true }),
      pieceSquare: ""
    });
  };

  onSquareRightClick = square =>
    this.setState({
      squareStyles: { [square]: { backgroundColor: "deepPink" } }
    });

  render() {
    //console.log("------>", JSON.stringify(this.state));
    stateObj = this.state.history;
    //console.log("current history", stateObj);
    //console.log("is history empty: ", historyisEmpty);

    const { fen, dropSquareStyle, squareStyles } = this.state;

    return this.props.children({
      squareStyles,
      position: fen,
      onMouseOverSquare: this.onMouseOverSquare,
      onMouseOutSquare: this.onMouseOutSquare,
      onDrop: this.onDrop,
      dropSquareStyle,
      onDragOverSquare: this.onDragOverSquare,
      onSquareClick: this.onSquareClick,
      onSquareRightClick: this.onSquareRightClick
    });
  }
}

class QuizBoard extends Component {
  state={
  }

  componentDidMount(){
    console.log("running component did MOUNT inside quizboard");
    console.log(pickupStateFen, " vs ", question1answer);
  }

  componentDidUpdate(){
    console.log("running component did UPDATE inside quizboard");
    console.log(pickupStateFen, " vs ", question1answer);
    if(pickupStateFen === question1answer.fen){
      console.log("handlefunction triggered")
      this.props.handleUserAnswer();
    }
  }

  render(){
    return (
      <div>
        <HumanVsHuman initialboard={this.props.initialboard} handleUserAnswer={this.props.handleUserAnswer}>
          {({
            position,
            onDrop,
            onMouseOverSquare,
            onMouseOutSquare,
            squareStyles,
            dropSquareStyle,
            onDragOverSquare,
            onSquareClick,
            onSquareRightClick,
          }) => (
            <Chessboard
              id="humanVsHuman"
              width={325}
              position={position}
              lightSquareStyle={ {backgroundColor: 'tan'} }
              darkSquareStyle={ {backgroundColor: 'copperred'} }
              onDrop={onDrop}
              onMouseOverSquare={onMouseOverSquare}
              onMouseOutSquare={onMouseOutSquare}
              boardStyle={{
                borderRadius: "5px",
                boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
              }}
              squareStyles={squareStyles}
              dropSquareStyle={dropSquareStyle}
              onDragOverSquare={onDragOverSquare}
              onSquareClick={onSquareClick}
              onSquareRightClick={onSquareRightClick}
            />
          )}
        </HumanVsHuman>
      </div>
    );

  }
}

export default QuizBoard;


const squareStyling = ({ pieceSquare, history }) => {
  const sourceSquare = history.length && history[history.length - 1].from;
  const targetSquare = history.length && history[history.length - 1].to;

  return {
    [pieceSquare]: { backgroundColor: "rgba(255, 255, 0, 0.4)" },
    ...(history.length && {
      [sourceSquare]: {
        backgroundColor: "rgba(255, 255, 0, 0.4)"
      }
    }),
    ...(history.length && {
      [targetSquare]: {
        backgroundColor: "rgba(255, 255, 0, 0.4)"
      }
    })
  };
};

