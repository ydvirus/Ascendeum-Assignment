import { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import './App.css';
import PlayArea from './components/PlayArea';
import MoniterScreen from './components/MonitorScreen';
import { generateRandom } from './utils/reusable';

function App() {
  const [activeCell, setActiveCell] = useState(null);
  const [difficultySecond, setDiffSec] = useState('5');
  const [recordEntries, setRecordEntries] = useState([]);
  const [gameStatus, setGameStatus] = useState('pause');
  const intervalRef = useRef(null);
  const responseRef = useRef(null);
  const [responseTime, setResponseTime] = useState(0);

  const setDiffLevel = (prop) => {
    setDiffSec(prop.target.value);
  };

  useEffect(() => {
    console.log('responseTime change', responseTime);
  }, [responseTime]);

  useEffect(() => {
    if (gameStatus === 'start') {
      intervalRef.current = setInterval(() => {
        setActiveCell(generateRandom(1, 36));
      }, [difficultySecond * 1000]);
      responseRef.current = setInterval(() => {
        setResponseTime((prev) => prev + 1);
      }, [1000]);
    } else if (gameStatus === 'pause') {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (responseRef.current) {
        clearInterval(responseRef.current);
      }
    }
  }, [gameStatus, difficultySecond]);

  const registerCell = (cellId) => {
    if (intervalRef.current && responseRef.current) {
      setRecordEntries((prev) => {
        const nextClickNum = prev.length + 1;
        return [
          ...prev,
          { mouseClickNum: nextClickNum, reactionTime: responseTime },
        ];
      });
      if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          setActiveCell(generateRandom(1, 36));
        }, [difficultySecond * 1000]);
      }
      if (responseRef.current) {
        clearInterval(responseRef.current);
        responseRef.current = setInterval(() => {
          setResponseTime((prev) => prev + 1);
        }, [1000]);
      }
      setResponseTime(0);
      setActiveCell(generateRandom(1, 36));
    }
  };

  const resetGame = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (responseRef.current) {
      clearInterval(responseRef.current);
    }
    setActiveCell(null);
    setGameStatus('pause');
    setRecordEntries([]);
  };

  // Catch the red dot game
  // 1. Header section - Input for complexity, start, pause, reset
  // 2. Play game area - 6x6 grid
  // 3. Moniter area - Mouse click number and Reaction
  //  time
  // 4. start game
  return (
    <div className="game-wrapper">
      <Header
        onTimeSelection={setDiffLevel}
        difficultySecond={difficultySecond}
        setGameStatus={setGameStatus}
        gameStatus={gameStatus}
        setActiveCell={setActiveCell}
        resetGame={resetGame}
      />
      <PlayArea activeId={activeCell} registerCell={registerCell} />

      <MoniterScreen recordEntries={recordEntries} />
    </div>
  );
}

export default App;
