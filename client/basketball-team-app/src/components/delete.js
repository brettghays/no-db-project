import React, {Component} from 'react';
import axios from 'axios'

export default class Delete extends Component {
    constructor(){
        super();
        this.state = {
            value: 0,
            updatedRoster: []
        }
    }
    
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    
    handleSubmit(event){
        //event.preventDefault();
        let {value} = this.state;
        console.log(value)
        axios.delete(`/api/roster/${value}`)
            .then(res => {
                let data = res.data;
                this.setState = ({updatedRoster: data});
                console.log(data)
            })
                
            .catch(err => console.log(err))
    }
    
    render(){  
        return(
            <div className="game-container">
                <h4>Delete Player</h4>
                <div className="form">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="value">
                        Select a player ID to delete:
                        <select value={this.state.value} onChange={e => this.handleChange(e)}>
                            <option value="0">0</option>
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
                        </select>
                    </label>
                    <input type="submit" value="Delete Player Now!"/>                  
                </form>
                </div> 
            </div>
            
            
        );       
    }
    
}