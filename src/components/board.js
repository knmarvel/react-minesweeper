import "./board.css";
import { Square } from "."
import { changeSquareType, checkMove, createBoard, toggleFlag } from "../helpers"
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function Board({ boardSize, mineNum }) {
    const [boardInfo, setBoardInfo] = useState(createBoard(boardSize, mineNum))
    const handleLeftClick = function (e, coords, squareType){
        e.preventDefault()
        console.log(squareType)
        let newSquareType = checkMove(squareType)
        console.log(newSquareType)
        if(newSquareType[1]=="0" && newSquareType[0]=="1"){
            coords = [coords]
            for(let row of Object.entries(boardInfo)){
                for (let square of Object.values(row)){
                    if(square[1]=="0"){
                        coords.push()
                    }
                }
            }
        }
        setBoardInfo((prev) => changeSquareType(prev, coords, newSquareType))
    }

    const handleRightClick = function (e, coords, squareType){
        e.preventDefault()
        let newSquareType = toggleFlag(squareType)
        setBoardInfo((prev) => changeSquareType(prev, coords, newSquareType))
    }

    return (
        <div className="board">Hello there! I'm the board!
            <div className="board-rows">
            
            {Object.entries(boardInfo).map(
                    s => {
                        return (
                            <div className="boardRows">
                                {Object.entries(s[1]).map(y=>{
                                    // console.log("coords",[s[0], y[0]])
                                    return (
                                        <Square 
                                            type={y[1]}
                                            coords={[s[0], y[0]]}
                                            handleLeftClick={handleLeftClick}
                                            handleRightClick={handleRightClick}
                                            key={uuidv4()}
                                        />
                                    )
                                })}
                            </div>
                        )
                    }
            )}
            </div>
        </div>
    );
};

export default Board;