import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

import {Board} from "./components"

function App() {
  const [boardSize] = useState([8,8])
  const [mineNum] = useState(10)
  return (
    <div className="App">
      <Board boardSize={boardSize} mineNum={mineNum}/>
    </div>
  );
}

export default App;
