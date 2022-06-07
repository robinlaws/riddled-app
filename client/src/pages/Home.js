import React, { useEffect, useRef, useState } from "react";
import { UserKeyboard } from "../components/keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function Home(props){
  const [correctGuess, isGuessCorrect] = useState(false);
  const [remainingTurns, setRemainingTurns] = useState(4);
  const [noMoreTurns, setNoMoreTurns] = useState(false);

  if (noMoreTurns){
    return(
    <>
    {riddleDisplay(props)}
    {endOfTurns(props)}
    </>
    )
  }

  if (correctGuess){
    return(
     <>
        {riddleDisplay(props)}
        {guessCorrect()}
      </>
      )
  }

    else {
      return(
        <>
        {riddleDisplay(props)}
        <div className="App"> 
        <UserKeyboard riddle={props.riddle} isGuessCorrect={isGuessCorrect} remainingTurns={remainingTurns} setRemainingTurns={setRemainingTurns} setNoMoreTurns={setNoMoreTurns}/>
      </div>
      </>
      )
    }
  }

export function riddleDisplay(props){
  return(
  <div>
    <h1>RIDDLED </h1>
    <p>{props.riddle.riddle}</p>  
    <p>{props.riddle.solution}</p>
  </div>
  )
};

export function endOfTurns(props){
  return (
    <div>
    <p>SORRY OUT OF TURNS. THE ANSWER IS {props.riddle.solution} </p>
    </div>
  )
};

export function guessCorrect(){
  return (
    <div>
    <p>WAY TO GO!</p>
    </div>
  )
};




