import React, { useEffect, useRef, useState } from "react";
import { UserKeyboard } from "../components/keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function Home(props){
  const [correctGuess, isGuessCorrect] = useState(false);
  const [remainingTurns, setRemainingTurns] = useState(5);
  const [noMoreTurns, setNoMoreTurns] = useState(false)

  useEffect(() => {
    console.log(remainingTurns);
  }, [noMoreTurns])


  if (noMoreTurns){
    return(
    <div>
    <h1>RIDDLED </h1>
    <p>{props.riddle.riddle}</p>  
    <p>{props.riddle.solution}</p>
    <p>SORRY OUT OF TURNS. THE ANSWER IS {props.riddle.solution} </p>
  </div>
    )
  }

  if (correctGuess){
      return (
        <div>
        <h1>RIDDLED </h1>
        <p>{props.riddle.riddle}</p>  
        <p>{props.riddle.solution}</p>
        <p>WAY TO GO!</p>
    </div>
      )};

    return (
    <>
    <h1>RIDDLED </h1>
    <p>{props.riddle.riddle}</p>  
    <p>{props.riddle.solution}</p>
    <input type="text" placeholder="guess"></input>
    <input type="submit"></input>
    <div className="App">
      <UserKeyboard riddle={props.riddle} isGuessCorrect={isGuessCorrect} remainingTurns={remainingTurns} setRemainingTurns={setRemainingTurns} setNoMoreTurns={setNoMoreTurns}/>
    </div>
    </>
  );
};