import React from 'react';
import {Link} from 'react-router-dom';

export function Nav() {
    return (
      <div className="topnav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rules" >How to play</Link>
          <Link to="/stats" >Stats</Link>
        </nav>
      </div>
    )};
