import React, {  useRef, useState } from "react";
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
      props.setRemainingTurns(props.remainingTurns - 1);
      if (input === props.riddle.solution.toLowerCase()) {
          props.isGuessCorrect(true);
      } else if (props.remainingTurns === 0) {
          props.setNoMoreTurns(true);
          setInput("");
      }
  }

    
  const onKeyPress = button => {
    if (button === "{shift}"){
      
    }
    if (button === "{bksp}"){
      setInput(input.slice(0, -1));  
    }

    else if (button === "{space}"){
      setInput(input + " ");
    }

    else if (button === "{enter}"){
      setUserGuess(userGuess.concat(input));
      checkGuess(input);
      setInput("");
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
        <div>Guess: {input}</div>

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
            theme={"hg-theme-default myTheme1"}
            layout={{
              default: [
                "1 2 3 4 5 6 7 8 9 0 {bksp}",
                "q w e r t y u i o p ",
                "a s d f g h j k l ' {enter}",
                "z x c v b n m , . ",
                ".com @ {space}"
              ]
            }}
          />
        </div>
      </>
    );
  }