import React, { Component } from 'react';
import './App.css';

import Schedule from './components/schedule'
import Roster from './components/roster'
import Navbar from './components/navbar'
import Header from './components/header'
import Game from './components/game'
import Delete from './components/delete'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="body">
          <div className="box weekAtGlance"><Schedule /></div>
          <div className="box blackFlag"><Roster /></div>
          <div className="box singleGame"><Game /></div>
          <div className="box deletePlayer"><Delete /></div>
        </div>
      </div>
    );
  }
}

export default App;
