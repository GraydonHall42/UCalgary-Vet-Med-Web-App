import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
//import pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import StatusDashboard from "./pages/StatusDashboard";
import AnimalProfilePage from "./pages/AnimalProfilePage";


function App() {
    const validUser = {username: "group248", password: "password"};
    const [loggedIn, setLoggedIn] = useState(true);

    const Authenticate = cred => {
        if(cred.username === validUser.username && cred.password === validUser.password){
            setLoggedIn(true);
        }
    }

    if(loggedIn){
        return (
            <div className="auth">
                <Router>
                    <Navbar />
                    <Routes className="routes">
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/status" element={<StatusDashboard />} />
                        <Route exact path="/animal-profile" element={<AnimalProfilePage />} />
                    </Routes>
                </Router>
                
            </div>
        )
    }
    else{
        return (
            <div className="not-auth">
                <Login exact path="/" Authenticate={Authenticate} />
            </div>
        )
    }

    
}

export default App;