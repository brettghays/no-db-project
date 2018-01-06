import React from 'react';
import './navbar.css';

const Navbar = Navbar => {
    return(
        <div className="navbar">
           <button className="schedule">Schedule</button>
           <button className="roster">Roster</button>
        </div>
    )
}

export default Navbar