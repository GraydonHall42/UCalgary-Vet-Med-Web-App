import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
//import pages
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";


function App() {
    const validUser = {username: "group248", password: "password"};
    const [loggedIn, setLoggedIn] = useState(false);

    const Authenticate = cred => {
        if(cred.username == validUser.username && cred.password == validUser.password){
            setLoggedIn(true);
        }
    }

    if(loggedIn){
        return (
            <div className="auth">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" exact component={Home} />
                    </Routes>
                </Router>
                
            </div>
        )
    }
    else{
        return (
            <div className="not-auth">
                <Login Authenticate={Authenticate} />
            </div>
        )
    }

    
}

export default App;