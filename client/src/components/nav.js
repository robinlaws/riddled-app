import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import {Stats} from '../pages/Stats';

export function Nav() {
    return (
      // <div className="navbar">
      //   <div className="dropdown">
      //     <button className="dropbtn" onClick={rulesClick(this)}>How to Play</button>
      //       <div id="rulesDropdown" className="dropdown-content">
      //         <p>this is how you play</p>
      //       </div>
      //     </div> 
      // <div className="dropdown">
      //   <button type="button" className="dropbtn">Stats</button>
      //     <div id="statsDropdown" className="dropdown-content">
      //       <Stats/>
      //     </div>
      //   </div>
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rules" >How to play</Link>
          <Link to="/stats" >Stats</Link>
        </nav>
      </div>
    )}

