import React, { useState } from "react";
import { UserKeyboard } from "../components/keyboard";
import "react-simple-keyboard/build/css/index.css";
import {Stats} from "./Stats";

import "../App.css";

export function Home(props){
  getUser();
  let user1 = JSON.parse(localStorage.getItem('user'));
  const [correctGuess, isGuessCorrect] = useState(false);
  const [remainingTurns, setRemainingTurns] = useState(5);
  const [noMoreTurns, setNoMoreTurns] = useState(false);

  if (noMoreTurns){
    user1.gamesPlayed += 1;
    localStorage.setItem('user', JSON.stringify(user1));
    return(
      <>
        {riddleDisplay(props)}
        {endOfTurns(props)}
      </>
    )
  }
  if (correctGuess){
      user1.wins +=1
      user1.gamesPlayed += 1;
      switch(remainingTurns) {
          case 0: user1.five +=1;
                  break;
          case 1: user1.four +=1;
                  break;
          case 2: user1.three +=1;
                  break;
          case 3: user1.two +=1;
                  break;
          case 4: user1.one +=1;
                  break;
      }
      localStorage.setItem('user', JSON.stringify(user1));
      return(
        <>
            {riddleDisplay(props)}
            {guessCorrect(props)}
            <br/>
            <Stats/>
        </>
    )
  } else {
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
  return (
  <div class='font'>
    <h1>RIDDLED </h1>
    {<p>{props.riddle.riddle}</p>}
  </div>
  )
}

export function endOfTurns(props){
  return (
    <div>
      <p>SORRY OUT OF TURNS. THE ANSWER IS</p>
      <p>THE ANSWER IS: {props.riddle.solution}</p>
    </div>
  )
}

export function guessCorrect(props){
  return (
    <div>
      <p>WAY TO GO!</p>
      <p>THE ANSWER IS: {props.riddle.solution}</p> 
    </div>
  )
}

export function getUser() {
    const returningUser = JSON.parse(localStorage.getItem('user'));
    console.log(returningUser);
    if (!returningUser) {
        const user = {
            gamesPlayed: 0,
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            wins: 0
        }
        window.localStorage.setItem("user", JSON.stringify(user));
    }
}




