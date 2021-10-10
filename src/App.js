import './App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


import {Board} from "./components"

function App() {
  const [boardSize] = useState([8,8])
  const [mineNum] = useState(10)
  return (
    <div className="App">
      <Board
        boardSize={boardSize}
        mineNum={mineNum}
        key={uuidv4()}
      />
    </div>
  );
}

export default App;
