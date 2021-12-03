import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import StatusDashboard from "../pages/StatusDashboard";
import AnimalProfilePage from "../pages/AnimalProfilePage";
import UserManagement from "../pages/UserManagement";
import AnimalBooking from "../pages/AnimalBooking";
import UserProfilePage from "../pages/UserProfilePage";
import IndividualMedicalIssuePage from "../pages/IndividualMedicalIssuePage";
import Login from "../pages/Login";

function UnauthorizedRoutes() {
    
    
    return (
        <div className="not-auth">
            <Login exact path="/"/>
        </div>
    )
}

export default UnauthorizedRoutes