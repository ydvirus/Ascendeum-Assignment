import React from 'react';
import './Header.css';
import { generateRandom } from '../../utils/reusable';

const Header = ({
  difficultySecond,
  onTimeSelection,
  setGameStatus,
  gameStatus,
  setActiveCell,
  resetGame,
}) => {
  return (
    <header>
      <div className="input-wrapper">
        <input
          type="number"
          value={difficultySecond}
          onChange={onTimeSelection}
          disabled={gameStatus === 'start'}
        />
      </div>
      <button
        onClick={() => {
          setGameStatus('start');
          setActiveCell(generateRandom(1, 36));
        }}
        disabled={gameStatus === 'start'}
        style={{ backgroundColor: gameStatus === 'start' ? 'grey' : 'green' }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setGameStatus('pause');
          setActiveCell(null);
        }}
        disabled={gameStatus === 'pause'}
        style={{ backgroundColor: gameStatus === 'pause' ? 'grey' : 'yellow' }}
      >
        Pause
      </button>
      <button onClick={resetGame}>Reset</button>
    </header>
  );
};

export default Header;
