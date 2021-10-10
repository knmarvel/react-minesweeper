import "./square.css";
import {useState, useEffect } from 'react';

function Square({ type, coords, handleLeftClick, handleRightClick }){
    const [clicked, setClicked] = useState("")
    const [mine, setMine] = useState("")
    const [flag, setFlag] = useState("")
    if(mine == "" && type[0] == "1" && type[1] == "0"){
        setMine("mine")
    }
    if(clicked == "" && type[0] == "1"){
        console.log("CLICKKKDKED")
        setClicked("clicked")
    }
    useEffect(() => {
        switch (type[2]){
            case "0":
                console.log("0")
                setFlag((prev) => "");
                break;
            case "1":
                console.log("flag")
                setFlag((prev) => "flag");
                break;
            case "2":
                console.log("smile")
                setFlag((prev) => "smile")
                break;
            default:
                console.log("the switch ain't working")
        }
    })


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