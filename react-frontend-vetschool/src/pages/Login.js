import React, {useState} from 'react'
import "../styles/Login.css"

import Horses from '../assets/ucalgary-vet-med-horses.jpg';

function Login({Authenticate}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        Authenticate({username, password})
    }

    return (
        <div className="login">
            <img className="vet-building" src={Horses} />
            <div className="form">
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" value={username} onChange={e => {setUsername(e.target.value)}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                        </div>
                        <input className="submit-button" type="submit" value="Login"  />
                        
                    </div>
                </form>
            </div>    
        </div>
    )
}

export default Login

