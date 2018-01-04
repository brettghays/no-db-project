import React, { Component } from 'react';
import './App.css';

import Schedule from './components/schedule'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>Roster</li>
            <li>Schedule</li>
          </ul>  
        </nav>
        <div className="body">
         {/*  <div className="box lastGame"><div>Last Game</div></div>
          <div className="box weekAtGlance"><Schedule /></div>
          <div className="box upcomingGame"><div>Upcoming Game</div></div>
          <div className="box blackFlag"><div>Black Flag</div></div> */}
        </div>
      </div>
    );
  }
}

export default App;
