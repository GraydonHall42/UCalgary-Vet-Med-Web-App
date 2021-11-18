import React from 'react'
import "../styles/Login.css"

import VetBuilding from '../assets/ucalgary-vet-med-building.jpg';

function Login() {
    return (
        <div className="login">
            <img src={VetBuilding} />
        </div>
    )
}

export default Login
