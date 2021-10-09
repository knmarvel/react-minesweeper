import "./square.css";
import {useState} from 'react';

function Square({ type, coords, handleLeftClick, handleRightClick }){
    const [clicked, setClicked] = useState("")
    const [mine, setMine] = useState("")
    const [flag, setFlag] = useState("")
    if(mine == "" && type[0] == "1" && type[1] == "0"){
        setMine("mine")
    }
    else if(clicked == "" && type[0] == "1"){
        console.log("CLICKKKDKED")
        setClicked("clicked")
    }
    else if(flag == "" && type[2] == "1"){
        console.log("FLAGGGGG")
        setFlag((prev) => "flag")
    }

    return (
    <button 
        className={`square ${clicked} ${mine} ${flag}`}
        onClick={(e) => handleLeftClick(e, coords, type)}
        onContextMenu={(e) => handleRightClick(e, coords, type)}>
         {type}
    </button>
    )
};

export default Square