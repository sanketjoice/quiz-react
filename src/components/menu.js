import React,{useContext} from "react";
import { quizContext } from "../helpers/contexts";
import "../App.css";

export default function Menu(){
    const { gameState, setGameState}=useContext(quizContext);
    return(
        
       <div className="menu">
        <button onClick={() => {setGameState ("quiz")
            }
        }>Start Quiz</button>
       </div> 
    )
}