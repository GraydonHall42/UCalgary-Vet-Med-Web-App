import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
//import pages
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Login from "./pages/Login";
import StatusDashboard from "./pages/StatusDashboard";
import AnimalProfilePage from "./pages/AnimalProfilePage";
import UserManagement from "./pages/UserManagement";
import AnimalBooking from './pages/AnimalBooking'
import UserProfilePage from "./pages/UserProfilePage";

function App() {
    const validUsers = [
        {
            username: "Instructor_1", 
            password: "pt@123"
        },
        {
            username: "Admin_1", 
            password: "pa"
        },
        {
            username: "Technician", 
            password: "pe"
        }
    ];

    const [loggedIn, setLoggedIn] = useState(true);
    const [userType, setUserType] = useState(null);

    const Authenticate = cred => {
        for (let user of validUsers) {
            console.log(cred.username + "    " + cred.password);
            console.log(user.username + "    " + user.password);
            if(cred.username === user.username && cred.password === user.password){
                setLoggedIn(true);
                if(cred.username.startsWith("Instructor")) setUserType("instructor");
                if(cred.username.startsWith("Admin")) setUserType("admin");
                if(cred.username.startsWith("Technician")) setUserType("technician");
            }   
        }
    }

    if(loggedIn){
        return (
            <div className="auth">
                <Router>
                    <NavigationBar />
                    <Routes className="routes">
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/status" element={<StatusDashboard />} />
                        <Route exact path="/animal-profile" element={<AnimalProfilePage />} />
                        <Route exact path="/user-management" element={<UserManagement />} />
                        <Route exact path="/booking" element={<AnimalBooking />} />
                        <Route exact path="/user-profile" element={<UserProfilePage />} />
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