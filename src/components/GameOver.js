import React from 'react';
import '../styles/gameover.css';

const GameOver = ({winner, restartGame, currentLevel}) => {
  if (winner === 'player' && currentLevel === 9) {
    return (
      <div className='gameOver'>
        <p>You defeated the evil sorcerer</p>
        <p>but it's too late</p>
        <p>Your princess turned to the dark side.</p>
        <p>She become Mother of Dragons!</p>
        <p>Too bad for you.</p>
        <p>But don't worry - there are</p>
        <p>many princesses left!</p>
        <p>Don't drink and ride on your way home!</p>
        <button className="nextLevelBTN" onClick={() => restartGame("restart")}>RESTART</button>
      </div>
    );
  }

  if (winner === 'player') {
    return (
      <div className='gameOver'>
        <p>You Win This Round!</p>
        <p>and</p>
        <p>You're going to next Door.</p>
        <p>Good Luck!</p>
        <button className="nextLevelBTN" onClick={() => restartGame("next")}>NEXT LEVEL</button>
      </div>
    );
  } else {
    return (
      <div className='gameOver'>
        <p>You Didn't open this Door!</p>
        <p>You're going to try again.</p>
        <p>Good Luck!</p>
        <button className="nextLevelBTN" onClick={() => restartGame("retry")}>TRY AGAIN</button>
      </div>
    );
  }
}

export default GameOver;

