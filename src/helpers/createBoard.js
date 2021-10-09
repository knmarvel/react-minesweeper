import pickMineCoords from "./pickMineCoords"

let al = "abcdefghijklmnopqrstuvwxyz"

const createBoard = function (boardSize, mineNum) {
    let mineCoords = pickMineCoords(mineNum)
    let board = {};
    for (let i = 0; i < boardSize[0]; i++) {
        board[i] = []
        for (let j = 0; j < boardSize[1]; j++) {
            let boardCoords = i.toString() + al[j];
            if (mineCoords.includes(boardCoords)) {
                board[i].push("000");
            }
            else {
                board[i].push("010");
            }
        };
    };
    return board;
};

export default createBoard;