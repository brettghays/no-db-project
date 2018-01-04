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
                <div>
                    <ul class = "schedule">
                    <div key={game.id} className="parent">
                        <li>Date: {game.date}</li>
                        <li>Day: {game.day}</li>
                        <li>{game.homeTeam} vs {game.guestTeam}</li>
                        <li>Score: {game.homeScore} - {game.guestTeam}</li>
                    </div>
                </ul>
                </div>
                
            )
            
       });
       return ({schedule})
       
    }
}

