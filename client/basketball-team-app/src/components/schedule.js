import React, {Component} from 'react';
import axios from 'axios'

export default class Schedule extends Component {
    constructor(){
        super();
        this.state = {
            schedule: []
        }
    }

    componentDidMount() {
        axios.get(`/api/schedule/`)
        .then(res => {
            let gameData = res.data;
            this.setState({schedule: gameData});
            console.log(gameData)
        })
        .catch(err => console.log(err))
    }
    
    render(){
        const schedule = this.state.schedule.map(game => {
            return (
                <ul key={game.id} className="child">
                    <li>Game {game.id}</li>
                    <li>Date: {game.date}</li>
                    <li>Day: {game.day}</li>
                    <li>{game.guestTeam} at {game.homeTeam}</li>
                    <button className="directions">Get Directions</button>
                </ul>
                
                            
            )
            
       });
       return (
           <div className="parent">{schedule}</div>
       )
       
    }
}

