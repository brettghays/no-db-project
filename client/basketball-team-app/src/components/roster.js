import React, {Component} from 'react';
import axios from 'axios';

export default class Roster extends Component {
    constructor (){
        super();
        this.state = {
            roster: []
        }
    }

    componentDidMount(){
        axios.get(`/api/roster`)
        .then(res => {
            this.setState({roster: res.data});
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    render(){
        const roster = this.state.roster.map(player => {
            return (
                <ul key={player.id} className="child">
                    <li>Player ID: {player.id}</li>
                    <li>{player.firstName} {player.lastName}</li>
                    <li>Number: {player.jerseyNumber}</li>
                    <li>Height: {player.height}</li>
                    <li>Position: {player.position}</li>
                </ul>
                               
            )
            
       });
       return (
           <div className="parent">{roster}</div>
       )
       
    }
    
}