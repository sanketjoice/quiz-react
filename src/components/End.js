
import React, {useContext} from "react";
import { quizContext } from "../helpers/contexts";
import { questions } from "../helpers/QuestionBank";

export default function End(){
    const {score, setScore, setGameState}=useContext(quizContext);
    const restartQuiz = ()=>{
        setScore(0)
        setGameState("menu")
    }
    return(
        <div className="EndScreen"><h1>Quiz Finished</h1>
        <h3>{score}/{questions.length}</h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}