import React, {Component} from 'react';
import axios from 'axios'

export default class Game extends Component {
    constructor(){
        super();
        this.state = {
            value: "1",
            singleGame: []
        }
    }
    
    handleChange(event){
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value)
    }
    
    handleSubmit(event){
        event.preventDefault();
        const {value} = this.state;
    
        axios.get(`/api/schedule/${value}`)
            .then(res => {
                let game = res.data;
                this.setState = ({singleGame: game});
                console.log(game)
            })
                
            .catch(err => console.log(err))
    }
    
    render(){  
        const displayGame = this.state.singleGame.map(game => {
            return(
                <div>
                    <ul key={game.id} className="Child">
                        <li><strong>{game.day}, {game.date} at {this.state.singleGame.time}</strong></li>
                        <li>{game.homeTeam} vs. {game.guestTeam}</li>
                        <li>{game.homeScore} - {game.guestScore}</li>
                        <li>{game.outcome}</li>
                    </ul>game
                </div>
            )
        });     
        return(
            <div className="game-container">
                <h4>Single Game Information</h4>
                <div className="form">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="value">
                        Select a game for more information:
                        <select value={this.state.value} onChange={e => this.handleChange(e)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </label>                                       
                    <input type="submit" value="Get Game Info!"/>                                   
                </form>  
                </div>
                <div>{displayGame}</div>
            </div>
            
         );       
    }
    
}

