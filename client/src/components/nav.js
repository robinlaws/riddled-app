import React from 'react';
import {Link} from 'react-router-dom';
import {Stats} from '../pages/Stats';

export function Nav() {
    return (
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">How to Play</button>
            <div className="dropdown-content">
              <p>Guess the RIDDLED in 5 attempts or less!</p>
              <p>Click Get Hint to recieve a hint. This will cause you to lose an attempt.</p>
              <p>Hit the enter button to submit your guess. A new RIDDLED is available each day for you to guess!</p>
            </div>
          </div> 
      <div className="dropdown">
        <button className="dropbtn">Stats</button>
          <div className="dropdown-content">
            <Stats/>
          </div>
        </div> 
      </div>
      // <div className="topnav">
      //   <nav>
      //     <Link to="/">Home</Link>
      //     <Link to="/rules" >How to play</Link>
      //     <Link to="/stats" >Stats</Link>
      //   </nav>
      // </div>
    )};
