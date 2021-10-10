import "./board.css";
import { Square } from "."
import {
    changeSquareType,
    checkMove,
    createBoard,
    loseGame,
    switchFlag
}
    from "../helpers"
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function Board({ boardSize, mineNum }) {
    const [boardInfo, setBoardInfo] = useState(createBoard(boardSize, mineNum))

    const handleLeftClick = function (e, coords, squareType) {
        // When user left clicks a button, checks for mine or empty space.
        e.preventDefault()
        let newSquareType = checkMove(squareType)
        // if the clicked square is a bomb, game over:
        if (newSquareType === "100") {
            console.log("inside newSquareType is 100 if")
            setBoardInfo((prev) => loseGame(prev))
        }
        // otherwise, add our info to the board:
        else{
            setBoardInfo((prev) => changeSquareType(prev, coords, newSquareType))
        }
    }

    const handleRightClick = function (e, coords, squareType) {
        // When user right clicks a button, adds flag. 
        // 0 is no flag, 1 is mine flag, 2 is smiley flag
        e.preventDefault()
        let newSquareType = switchFlag(squareType)
        setBoardInfo((prev) => changeSquareType(prev, coords, newSquareType))
    }

    return (
        <div className="board">Hello there! I'm the board!
            <div className="board-rows">

                {Object.entries(boardInfo).map(
                    s => {
                        return (
                            <div
                                className="boardRows"
                                key={uuidv4()}
                            >
                                {Object.entries(s[1]).map(y => {
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