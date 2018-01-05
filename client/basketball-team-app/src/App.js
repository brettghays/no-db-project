import React, { Component } from 'react';
import './App.css';

import Schedule from './components/schedule'
import Roster from './components/roster'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="body">
          <div className="box lastGame"><div>Last Game</div></div>
          <div className="box weekAtGlance"><Schedule /></div>
          <div className="box upcomingGame"><div>Upcoming Game</div></div>
          <div className="box blackFlag"><Roster /></div>
        </div>
      </div>
    );
  }
}

export default App;
