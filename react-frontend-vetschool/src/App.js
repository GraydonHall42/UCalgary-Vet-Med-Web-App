import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
//import pages
import Home from "./pages/Home";
import Weight from "./pages/Weight";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import MedicalIssueList from "./pages/MedicalIssueList";
import StatusDashboard from "./pages/StatusDashboard";


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
                        <Route exact path="/weight" element={<Weight />} />
                        <Route exact path="/medical" element={<MedicalIssueList />} />
                        <Route exact path="/status" element={<StatusDashboard />} />
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