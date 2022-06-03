import { UserKeyboard } from "../components/keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function Home(props){
    return (
    <>
    <h1>RIDDLED </h1>
    <p>{props.riddle.riddle}</p>  
    <p>{props.riddle.solution}</p>
    <div className="App">
      <UserKeyboard/>
    </div>
    </>
  );
};