import { UserKeyboard } from "../components/keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../App.css";

export function Home(){

    return (
<>
    <h1>RIDDLED </h1>  
    <div className="App">
      <UserKeyboard/>
    </div>
    </>
  );
}