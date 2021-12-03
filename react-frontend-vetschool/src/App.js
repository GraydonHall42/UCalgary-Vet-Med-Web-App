import React, {createContext, useMemo, useState} from "react";
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
import IndividualMedicalIssuePage from "./pages/IndividualMedicalIssuePage";
import {UserContext} from "./UserContext";
import AuthorizedRoutes from "./components/AutorizedRoutes";
import UnauthorizedRoutes from "./components/UnautorizedRoutes";
import useLocalStorage from "./hooks/useLocalStorage";



function App() {

    // using context api
    const [user, setUser] = useLocalStorage(null);  // user initiall set as null
    const loginValue = useMemo(() => ({ user, setUser }), [user, setUser]);


    return (
        <UserContext.Provider value={loginValue}>
            {(user != null) ? <AuthorizedRoutes/> : <UnauthorizedRoutes/>}
        </UserContext.Provider>
    )
}

export default App;