import React, { Component } from 'react';
import './App.css';

import Schedule from './components/schedule'
import Roster from './components/roster'
import Navbar from './components/navbar'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="body">
          <div className="box weekAtGlance"><Schedule /></div>
          <div className="box blackFlag"><Roster /></div>
          <div className="box singleGame">Single Game</div>
          <div className="box deletePlayer">Delete Player</div>
        </div>
      </div>
    );
  }
}

export default App;
