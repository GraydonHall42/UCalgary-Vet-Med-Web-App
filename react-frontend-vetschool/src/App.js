import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
//import pages
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";


function App() {
    let loggedIn = true;

    if(loggedIn){
        return (
            <div className="App">
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
            <div className="App">
                <Login />
            </div>
        )
    }

    
}

export default App;