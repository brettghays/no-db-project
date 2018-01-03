import React, {Component} from 'react';
import axios from 'axios'

export default class Schedule extends Component {
    constructor(){
        super();
        this.state = {
            schedule: []
        }
    }

    componentWillMount() {
        axios.get(`/api/schedule/`)
        .then(res => 
            console.log(res))
            //this.setState({schedule: res.data}))
        .catch(err => console.log(err))
    }
    
    render(){
        const schedule = this.state.schedule;
        return (
            <div className="full">
                <h4>2017-2018 Game Schedule</h4>
                <br/>
                <ul className="schedule">
                {this.state.schedule.map(game => {
                    return(
                        <div className="parent">
                        <li key={game.id}>{game.date}</li>
                        <li key={game.id}>{game.day}</li>
                        <li key={game.id}>{game.homeTeam} vs. {game.guestTeam}</li>
                        <li key={game.id}>{game.homeScore} - {game.guestScore}</li>
                        </div>
                    )}                
                )}
                </ul>
            </div>
        )
    }
}

