const switchFlag = function (squareType) {
    console.log("starting squareType", squareType)
    // squareType: 
        // First digit stands for unclicked or clicked,
        // second digit stands for safe or mine
        // third digit stands for unflagged, flagged, or smiley
        if (squareType[2] === "0") {
            // flag it
            console.log("flag")
            return squareType[0] + squareType[1] + "1";
        }
        else if(squareType[2] === "1"){
            // smiley it
            console.log("smile")
            return squareType[0] + squareType[1] + "2";
        }
        else {
            // unflag it
            console.log("no flag")
            return  squareType[0] + squareType[1]  + "0";
        }

}

export default switchFlag