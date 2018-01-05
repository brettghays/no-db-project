import React from 'react';
import './navbar.css';

const Navbar = Navbar => {
    return(
        <div className="navbar">
            <h1>Salem Junior High Girls Basketball 2017-2018</h1>
            <br/>
            <div className="button">
                <button className="schedule">Schedule</button>
                <button className="roster">Roster</button>
            </div>
        </div>
    )
}

export default Navbar