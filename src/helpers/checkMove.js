const checkMove = function (squareType) {
    // squareType: 
    /// First digit stands for unclicked or clicked,
    /// second digit stands for safe or mine
    /// third digit stands for unflagged or flagged
    if (squareType[1] === "0") {
        // clicked a mine, you lose
        alert("someone set us up the bomb");
        return "100";
    }
    else if (squareType[0] === "1") {
        // already clicked, forget about it
        alert("you already clicked that!!!")
        return squareType
    }
    else {
        // mark as clicked
        return "1" + squareType[1] + squareType[2]
    }
}

export default checkMove