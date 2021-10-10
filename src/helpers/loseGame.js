const loseGame = function (boardInfo) {
    let newBoardInfo = Object.values(boardInfo).map((row) => {
        let newRow = row.map((squareType) => {
            if (squareType[1] === "0") {
                return "100";
            }
            return squareType;
        })
        return newRow;
    })
    return newBoardInfo;
}

export default loseGame;