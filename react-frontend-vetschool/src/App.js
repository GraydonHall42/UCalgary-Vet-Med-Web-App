import React, {createContext, useMemo, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
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