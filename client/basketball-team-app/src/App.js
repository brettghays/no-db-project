import React, { Component } from 'react';
import './App.css';

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
          <div id="lastGame"></div>
          <div id="schedule"></div>
          <div id="blackFlag"></div>
          <div id="upcomingGame"></div>
        </div>
      </div>
    );
  }
}

export default App;
