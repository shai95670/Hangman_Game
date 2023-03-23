import './app.css';
import { useState } from 'react';
import Game from './components/game/game';


function App() {
  const [isNewGame, setIsNewGame] = useState(false);
  return (
    <div className="App">
      {
        isNewGame &&
        <Game setIsNewGame={setIsNewGame}/>
      }
      {
        !isNewGame &&
        <Game setIsNewGame={setIsNewGame}/>
      }
    </div>
  );
}

export default App;
