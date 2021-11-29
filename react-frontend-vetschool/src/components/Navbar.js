import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/ucalgary-vet-med-logo.png';
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/booking">Animal Booking</Link>
                <Link to="/status">Animal Status</Link>
                <Link to="/profile">Profile</Link>    
            </div>
            
        </div>
    )
}

export default Navbar
