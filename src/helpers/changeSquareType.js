function changeSquareType(prev, coords, squareType){
    let newBoard = {...prev};
    newBoard[coords[0]][coords[1]] = squareType
    return newBoard
}

export default changeSquareType