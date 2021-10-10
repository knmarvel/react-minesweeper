const EndGameBanner = function({endType}){
    // endType: true is win, false is lose
    if(endType){
        return(
            <div className="endGame win">
                <h1>
                    You Win!!!
                </h1>
            </div>
        )
    }
    else{
        return(
            <div className="endGame lose">
                <h2>
                    You Lose!!!
                </h2>
            </div>
        )
    }
}

export default EndGameBanner