import React, { useEffect, useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function UserKeyboard(props){
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const [userGuess, setUserGuess] = useState([]);
  const [count, setCount] = useState(1);
  
  const keyboard = useRef();
  const inputLength = useRef(100);
  const maxGuesses = 5;

  const riddleSolution = "mashed potatoes"

  const hintCount = () => {
    setCount(count+1);
    console.log(count);
    return count;
  }
  

  const checkGuess = (input) => {
    if (input === props.riddle.solution.toLowerCase()) {
      props.isGuessCorrect(true);
    } else {
        props.setRemainingTurns(props.remainingTurns - 1);
        if (props.remainingTurns === 0){
          props.setNoMoreTurns(true);
        }
      }
      setInput("");
  }
    
  const onKeyPress = button => {
    if (button === "{bksp}"){
      setInput(input.slice(0, -1));  
    }

    else if (button === "{space}"){
      setInput(input + " ");
    }

    else if (button === "{enter}"){
      setUserGuess(userGuess.concat(input));
      checkGuess(input);
    }

    else {
      setInput(input + button);
    }
  };
    let inputs = [];
    for (let i = 0; i < maxGuesses; i++) {
        inputs.push(
          <div>
            <input type="text" placeholder={userGuess.length === i ? "Enter guess" : ""} id={`guess_${i}`} maxLength={inputLength} disabled={userGuess.length !== i} required/>
          </div>
        );
    }
    return (
      <>

        <div>
        <button onClick={hintCount}>Get Hint</button>
        </div> 
        <br></br>

        <div className="App">
        {inputs}
        <br></br>
        <br></br>

          <ul style={{listStyleType: "none"}}>
            {userGuess.map((guess, i) => (
              <div key={i}>
                <li>guess {i+1}:    {guess}</li>
              </div>
            ))}
          </ul>
          <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layout}
            onKeyPress={onKeyPress}
          />
        </div>
      </>
    );
  }