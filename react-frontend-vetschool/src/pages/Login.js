import React, {useContext, useState} from 'react'
import "../styles/Login.css"
import axios from 'axios';
import {login} from "../utils/login";

import Horses from '../assets/ucalgary-vet-med-horses.jpg';
import {UserContext} from "../Context/UserContext";

function Login({Authenticate}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const { user, setUser } = useContext(UserContext);

    // TODO: test this!!!
    const submitHandler = async e => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);
        await axios.post('http://localhost:8080/login', params)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("access_token", res.data.access_token)
                localStorage.setItem("refresh_token", res.data.refresh_token)
                return axios.get('http://localhost:8080/api/user/email/' + email, { 
                    headers: { 'Authorization': `Bearer ${localStorage.getItem("access_token")}` }
                })
            })
            .then(res => {
                if(res.data.blocked === true) {
                    setErrorMessage("User Blocked");
                }
                else {
                    setUser(res.data);
                }
            })
            .catch(err => {
                console.log(err);
                setErrorMessage("Wrong email / password combo.");
            });   
    }

    return (
        <div className="login">
            <img className="vet-building" src={Horses} />
            <div className="form">
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" value={email} onChange={e => {setEmail(e.target.value)}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                        </div>
                        <input className="submit-button" type="submit" value="Login"/>
                        <p className="errorMessage">{errorMessage}</p>
                        
                    </div>
                </form>
            </div>    
        </div>
    )
}

export default Login

