import React from 'react';
import {Link} from 'react-router-dom';
import {Stats} from '../pages/Stats';

export function Nav() {
    return (
      <div className="navbar">
        <div className="dropdown">
          <button class="dropbtn">How to Play</button>
            <div class="dropdown-content">
              <p>this is how you play</p>
            </div>
          </div> 
      <div class="dropdown">
        <button class="dropbtn">Stats</button>
          <div class="dropdown-content">
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
