import React, {Component} from ('react');
import axios from ('axios');

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
            this.setState({roster: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const roster = this.state.roster.map(player => {
            return (
                <div>
                    <ul class = "roster">
                    <div key={player.id} className="parent">
                        <li>First Name: {player.firstName}</li>
                        <li>Last Name: {player.lastName}</li>
                        <li>Jersey Number: {player.jerseyNumber}</li>
                        <li>Height: {player.height}</li>
                        <li>Position: {player.position}</li>
                    </div>
                </ul>
                </div>
                
            )
            
       });
       return ({roster})
       
    }
    
}