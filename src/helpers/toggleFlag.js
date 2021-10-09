const toggleFlag = function (squareType) {
    // squareType: 
        // First digit stands for unclicked or clicked,
        // second digit stands for safe or mine
        // third digit stands for unflagged or flagged
        if (squareType[0] === "0") {
            // flag it
            return squareType[0] + squareType[1] + "1";
        }
        else {
            // unflag it
            return  squareType[0] + squareType[1]  + "0";
        }

}

export default toggleFlag