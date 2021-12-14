import jwt_decode from "jwt-decode";
import axios from 'axios';
import React, {useContext} from 'react'
import {UserContext} from "../Context/UserContext";

const useAuthorization = () => {

    const { user, setUser } = useContext(UserContext);

    const getAccessToken = () => {
        let access_token = localStorage.getItem("access_token");
        let refresh_token = localStorage.getItem("refresh_token");
        let access_token_decoded = jwt_decode(access_token);
        let refresh_token_decoded = jwt_decode(refresh_token);
        let currentTime = (new Date().getTime() + 1) / 1000;


        if(access_token_decoded.exp - currentTime > 60) {
            return `Bearer ${access_token}`;
        }
        else if(refresh_token_decoded.exp - currentTime > 60) {
            axios.get('http://localhost:8080/api/token/refresh', {
                headers: {
                    'Authorization': `Bearer ${refresh_token}`
                }
            })
            .then(res => {
                access_token = res.data.access_token;
                refresh_token = res.data.refresh_token;
                localStorage.setItem("access_token", access_token)
                localStorage.setItem("refresh_token", refresh_token)
            })
            .catch(err => {
                setUser(null);
            });

            return `Bearer ${access_token}`;
        }
        else {
            setUser(null);
        }
    }

    return getAccessToken;

}

export default useAuthorization;