import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function UserKeyboard(props){
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const [userGuess, setUserGuess] = useState("");
    const keyboard = useRef();
  
    const onKeyPress = button => {
      console.log("Button pressed", button);
      setInput(input + button);
      console.log(input);
      if (button === "{enter}"){
        setUserGuess(input);
        setInput("");
        console.log(userGuess);
        if (userGuess === (props.riddle.solution).toLowerCase()) {
          props.isGuessCorrect(true);
          console.log("Right!");
        } else {
            props.setRemainingTurns(props.remainingTurns - 1);
            if (props.remainingTurns === 0){
              props.setNoMoreTurns(true);
            }
          } 
        }
        setUserGuess("");
      };
  
    return (
  <>
    <div className="App">
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onKeyPress={onKeyPress}
      />
    </div>
    </>
  );
}