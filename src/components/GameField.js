import React from 'react';

import { bgImages } from './bgImages';
import {createGameField, computerRookie, computerEasy, computerMedium, computerHard} from '../functions/gameFunctions';
import GameOver from './GameOver';
import '../styles/game_field.css';

class GameField extends React.Component {
  constructor() {
    super();
    this.state = {
      gameField: [],
      computerScore: 0,
      playerScore: 0,
      move: true,
      computerMove: false,
      pickInRow: true,
      currentLevel: 1,
      cellsSelected: [],
      lastCell: [],
      winner: '',
    }
  }

  componentDidMount = () => {
    const gameField = createGameField();
    const row = Math.floor(Math.random()*10);
    const col = Math.floor(Math.random()*10);
    // const move = Math.round(Math.random()) === 0;
    // const computerMove = !move;
    const pickInRow = Math.round(Math.random()) === 0;

    this.setState({gameField, pickInRow, lastCell: [row, col]});
  }

  setCellClassName = (row, col, number) => {
    const {gameField, lastCell, pickInRow} = this.state;
    let cn = "cell";

    cn += gameField[row][col] === 0 ? " cellSelected" : "";

    if (row === lastCell[0] && pickInRow) {
      if (number === 0) {
        cn += " halfTransparetCell";
      } else {
        cn += " rowSelected";
      }
    }

    if (col === lastCell[1] && !pickInRow) {
      if (number === 0) {
        cn += " halfTransparetCell";
      } else {
        cn += " colSelected";
      }
    }

    if (gameField[row][col] !== 0) {
      cn += row === lastCell[0] && pickInRow  ? " inrow" : "";
      cn += col === lastCell[1] && !pickInRow ? " incol" : "";
    }



    return cn;
  }

  cellSelected = (row, col, number) => {
    let {gameField, computerScore, playerScore, move, pickInRow, cellsSelected, lastCell} = this.state;

    if ((row !== lastCell[0] && pickInRow)
    || (col !== lastCell[1] && !pickInRow)
    || (gameField[row][col] === 0)) {
      return;
    }

    this.setState({computerMove: false});

    let i = 1;
    let counter = Math.abs(number);


    const myLoop = () => {
      setTimeout(() => {
        if (i <= counter) {
          computerScore += !move ? number > 0 ? 1 : -1 : null;
          playerScore += move ? number > 0 ? 1 : -1 : null;
          this.setState({computerScore, playerScore});
          i++;
          myLoop();
        }
      }, 50)
    }

    myLoop();

    const cell = `${row}${col}`;
    gameField[row][col] = 0;
    !cellsSelected.includes(cell) && cellsSelected.push(cell);

    setTimeout(() => {
      move = !move;
      pickInRow = !pickInRow;
      this.setState({
        gameField,
        move,
        computerMove: !move,
        pickInRow,
        cellsSelected,
        lastCell: [row, col],
      }, this.defineWinner(row, col, pickInRow));
    }, counter*50+350);
  }

  defineWinner = (row, col, pickInRow) => {
    const {gameField, computerScore, playerScore} = this.state;
    let winner = '';

    const columnArray = [];
    for (let i = 0; i <= 9; i++) {
      columnArray.push(gameField[i][col]);
    }

    if (pickInRow && gameField[row].filter(number => number === 0).length === 10) {
      winner = playerScore - computerScore > 0
        ? 'player'
        : playerScore - computerScore < 0
          ? 'computer'
          : 'drow';
    }

    if (!pickInRow && columnArray.filter(number => number === 0).length === 10) {
      winner = playerScore - computerScore > 0
        ? 'player'
        : playerScore - computerScore < 0
          ? 'computer'
          : 'drow';
    }

    if (winner) {
      this.setState({winner});
    }
  }

  restartGame = (level) => {
    if (level === 'next') {
      const gameField = createGameField();
      const row = Math.floor(Math.random()*10);
      const col = Math.floor(Math.random()*10);
      // const move = Math.round(Math.random()) === 0;
      // const computerMove = !move;
      const pickInRow = Math.round(Math.random()) === 0;
      const currentLevel = this.state.currentLevel + 1;

      this.setState({
        gameField,
        computerScore: 0,
        playerScore: 0,
        move: true,
        computerMove: false,
        pickInRow,
        currentLevel,
        cellsSelected: [],
        lastCell: [row, col],
        winner: '',
      });
    }
    if (level === 'retry') {
      const gameField = createGameField();
      const row = Math.floor(Math.random()*10);
      const col = Math.floor(Math.random()*10);
      // const move = Math.round(Math.random()) === 0;
      // const computerMove = !move;
      const pickInRow = Math.round(Math.random()) === 0;
      const currentLevel = this.state.currentLevel;

      this.setState({
        gameField,
        computerScore: 0,
        playerScore: 0,
        move: true,
        computerMove: false,
        pickInRow,
        currentLevel,
        cellsSelected: [],
        lastCell: [row, col],
        winner: '',
      });
    }
    if (level === 'restart') {
      const gameField = createGameField();
      const row = Math.floor(Math.random()*10);
      const col = Math.floor(Math.random()*10);
      // const move = Math.round(Math.random()) === 0;
      // const computerMove = !move;
      const pickInRow = Math.round(Math.random()) === 0;
      const currentLevel = 1;

      this.setState({
        gameField,
        computerScore: 0,
        playerScore: 0,
        move: true,
        computerMove: false,
        pickInRow,
        currentLevel,
        cellsSelected: [],
        lastCell: [row, col],
        winner: '',
      });
    }
  }

  render() {
    const {gameField, computerScore, playerScore, move, computerMove, currentLevel, winner, lastCell, pickInRow} = this.state;
    let compMove = [];

    if (!move && computerMove) {
      switch (currentLevel) {
        case 1:
          compMove = computerRookie(lastCell[0], lastCell[1], pickInRow, gameField);
          break;
        case 2 || 3 :
          compMove = computerEasy(lastCell[0], lastCell[1], pickInRow, gameField);
          break;
        case 4 || 5 || 6 :
          compMove = computerMedium(lastCell[0], lastCell[1], pickInRow, gameField);
          break;
        case 7 || 8 || 9 :
          compMove = computerHard(lastCell[0], lastCell[1], pickInRow, gameField);
          break;
      }

      if (compMove) {
        let number = gameField[compMove[0]][compMove[1]];
        this.cellSelected(compMove[0], compMove[1], number);
      }
    }

    return (
      <div className="game-field">
        <div className="field-back"
          style={bgImages[currentLevel-1]}
        >
          <div className={winner === '' || winner === 'computer'
            ? "field"
            : "field goesTop"}
          >
            {gameField.map((line, row) => line.map((number, col) => (
              <div
                className={this.setCellClassName(row, col, number)}
                key={`${row}${col}`}
                style={number > 0 ? {color: "#00bf00"} : number < 0 ? {color: "#ff0000"} : {color: "transparent"}}
                onClick={() => this.cellSelected(row, col, number)}
              >
                {number < 0 ? -number : number > 0 ? number : ""}
              </div>
            )))}
          </div>
        </div>

        <div className="gameInfo">
          <div className="level current">
            {`LEVEL : ${currentLevel}`}
          </div>
          <div className="level hero">
            HERO
          </div>
          <div className={currentLevel === 7 || currentLevel === 8 || currentLevel === 9 ? "level strong selectedLevel" : "level strong"}>
            STRONG
          </div>
          <div className={currentLevel === 4 || currentLevel === 5 || currentLevel === 6 ? "level middling selectedLevel" : "level middling"}>
            MIDDLING
          </div>
          <div className={currentLevel === 2 || currentLevel === 3 ? "level wimp selectedLevel" : "level wimp"}>
            WIMP
          </div>
          <div className={currentLevel === 1 ? "level baby selectedLevel" : "level baby"}>
            BABY
          </div>
          <div className="flash">
            {winner === '' && move
            && <img className="flash-img" src="https://thumbs.gfycat.com/BigDarkJapanesebeetle-size_restricted.gif" />}
            {winner === '' && !move
            && <img className="flash-img" src="https://img3.postila.ru/storage/7424000/7394600/14f804cb5d8d1543de95a882524ebb61.gif" />}

            {winner === 'player'
              && <div className="interim">
                  <img className="flash-finImg" src="https://www.stihi.ru/pics/2016/08/13/1056.jpg" />
                  <div className="winner">Knite Win!!!</div>
              </div>}
            {winner === 'computer'
              && <div className="interim">
                  <img className="flash-finImg" src="https://oyla.xyz/uploads/oylaarticle/rycar3-a2e232c96c.png" />
                  <div className="winner">Dragon Win!!!</div>
              </div>}
            {winner === 'drow'
              && <div className="interim">
                  <img className="flash-finImg" src="https://2.bp.blogspot.com/-xIEItcHHbo4/VuvlhwNY8hI/AAAAAAAASxQ/88I6yWTVJoErQrvPcgMko2KGlrNo4zh9w/s1600/Castelo%2B%2B4.gif" />
                  <div className="winner">DROW</div>
              </div>}
          </div>

          <div className="dash player">
            <div className="who">
              You
            </div>
            <div className="turn">
              <div className={move ? "turn-go" : "turn-stop"}>
                {move ? "GO !" : "STOP"}
              </div>
            </div>
            <div
              className="score"
              style={playerScore >= 0 ? {color: "#00bf00"} : {color: "#ff0000"}}
            >
              {playerScore >= 0 ? playerScore : -playerScore}
            </div>
          </div>

          <div className="dash computer">
            <div className="who">
              Comp
            </div>
            <div className="turn">
              <div className={move ? "turn-stop" : "turn-go"}>
                {move ? "STOP" : "GO !"}
              </div>
            </div>
            <div
              className="score"
              style={computerScore >= 0 ? {color: "#00bf00"} : {color: "#ff0000"}}
            >
              {computerScore >= 0 ? computerScore : -computerScore}
            </div>
          </div>

          <div className="dash author">
            Programmed by Raven
          </div>
        </div>

        {winner
        && <GameOver
          restartGame={this.restartGame}
          winner={winner}
          currentLevel={currentLevel}
        />}
      </div>
    );
  }
}

export default GameField;
