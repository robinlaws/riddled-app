import React, {  useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function UserKeyboard(props){
  
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const [userGuesses, setUserGuess] = useState([]);
  const [count, setCount] = useState(1);
  
  const keyboard = useRef();
  const inputLength = useRef(100);
  const maxGuesses = 5;

  let solution = props.riddle.solution || "";
  let solutionArray = Array.from(solution);
  console.log(solution);
  console.log(solutionArray);

  const getLetterHint = (solutionArray) => {
    const randomChar = Math.floor(Math.random() * solutionArray.length);
    const char = solutionArray[randomChar];
    solutionArray.splice(randomChar,1);
    return char;
  }

  const hintCount = () => {
    console.log("HINT COUNT ",count);
    console.log("REMAINING TURNS:", props.remainingTurns);

    setUserGuess(userGuesses.concat("GOT A HINT"));
    checkGuess("");

    setCount(count+1);
    props.setRemainingTurns(props.remainingTurns - 1);
    if (props.remainingTurns === 0) {
      props.setNoMoreTurns(true);
    }
    let hintString = "";
  
    if (count === 1) {
      const charsInSolution = (props.riddle.solution).length;
      hintString += `The answer is ${charsInSolution} characters long!`
      alert(hintString)
    }
    if (count === 2 || count === 3 || count === 4 || count === 5) {
      let char = getLetterHint(solutionArray);
      hintString += `The answer contains the letter ${char.toUpperCase()}`
      alert(hintString)
    }
  };

  const checkGuess = (input) => {
      props.setRemainingTurns(props.remainingTurns - 1);
      if (input.toLowerCase() === props.riddle.solution.toLowerCase()) {
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
      setUserGuess(userGuesses.concat(input));
      checkGuess(input);
      setInput("");
    }
    else {
      setInput(input + button);
    }
  };

  const onChange = (event) => {
    console.log("ONCHANGE", event.target.value);
    setInput(event.target.value);
  }

    let inputs = [];
    for (let i = 0; i < maxGuesses; i++) {
        let value = "";
        if (i === userGuesses.length) {
          value = input;
        }
        if (i < userGuesses.length) {
          value = userGuesses[i];
        }

        inputs.push(
          <div>
            <input type="text" value={value} placeholder={userGuesses.length === i ? "Enter guess" : ""} id={`guess_${i}`} onChange={onChange} disabled={userGuesses.length !== i} required/>
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
          <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layout}
            onKeyPress={onKeyPress}
            onChange={onChange}
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