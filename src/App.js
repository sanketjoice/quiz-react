import './App.css';
import Menu from './components/menu';
import Quiz from './components/Quiz';
import End  from './components/End';
import { useState, useContext } from 'react';
import { quizContext } from './helpers/contexts';

function App() {
  const [gameState, setGameState]=useState("menu");
  const [score, setScore]=useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <quizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState==="menu" && <Menu />}
      {gameState==="quiz" && <Quiz />}
      {gameState==="end" && <End />}      
      </quizContext.Provider>
    </div>
  );
}

export default App;
