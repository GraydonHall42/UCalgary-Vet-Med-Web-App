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

function AuthorizedRoutes() {
    return (
        <div className="auth">
            <Router>
                <NavigationBar/>
                <Routes className="routes">
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/status" element={<StatusDashboard/>}/>
                    <Route exact path="/animal-profile/:animalId" element={<AnimalProfilePage/>}/>
                    <Route exact path="/user-management" element={<UserManagement/>}/>
                    <Route exact path="/booking" element={<AnimalBooking/>}/>
                    <Route exact path="/user-profile" element={<UserProfilePage/>}/>
                    <Route exact path="/medical/:medicalIssueId" element={<IndividualMedicalIssuePage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default AuthorizedRoutes