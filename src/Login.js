import './Login.css'
import React from 'react'
import { getUser } from "./services/api"
import { useState } from 'react';
import  SubmitUser  from './SubmitUser'

function Login() {

    const [users, setUsers] = useState([]); // Here we store our Messages from the API

    /**
     * Fetch Messages from the API and store them in the internal state of the component.
     */

    const loadUser = () => {
        getUser()
            .then(users=> {
                setUsers(users);

            })
            .catch(error => {
                console.error("Error fetching messages:", error);
            });
    };


    return (
        <SubmitUser></SubmitUser>
        
    )

}

export default Login 