
import React from 'react'
import { getUser } from "./services/api"
import { useState } from 'react';


function SubmitUser() {
    const [newUser, setNewUser] = useState({
        username: "",
        hashed_password: "",
        height: "",
        weight: "",
        role: ""

    })

    const handleSubmit = async (e) => {
        if (newUser.username === "" || newUser.hashed_password === "") {
            alert("Please fill in all fields");
            e.preventDefault();
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                // Handle successful response
                console.log("User created successfully");
                // Reset the form
                setNewUser({
                    username: "",
                    hashed_password: "",
                    height: "",
                    weight: "",
                    role: ""

                });
                alert("Your fat will be burnt, quick")
            } else {
                // Handle error response
                console.log("Failed to create User");
            }
        } catch (error) {
            alert("Username name is already taken")
            console.log("Error:", error);
        }
    };

    return (
        <React.Fragment>
            <div className="text-light text-center bg-dark vh-100 d-flex flex-column">
                <div className="App" >
                    <div className="container" >
                        <div className="col">
                            <div className='Login'>
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <h3 className="header2">Login</h3>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='form-group mt-3'>
                                                <label className="header3">Username</label>
                                                <input className='form-control mt-1'
                                                    value={newUser.username}
                                                    placeholder='Enter username'
                                                    onChange={(e) => {
                                                        setNewUser({ ...newUser, username: e.target.value });
                                                    }}
                                                />
                                            </div>
                                            <div className='form-group mt-3'>
                                                <label className="header3">Password</label>
                                                <input
                                                    type='password'
                                                    className='form-control mt-1'
                                                    placeholder='Enter password'
                                                    value={newUser.hashed_password}
                                                    onChange={(e) => {
                                                        setNewUser({ ...newUser, hashed_password: e.target.value });
                                                    }}
                                                />
                                            </div>
                                            <div className='d-grid gap-2 mt-3'>
                                                <button>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className='custom-container'>
                                    <p>
                                        Join JBF today and experience the transformative power of our sport tracking app. Start your membership now and gain access to unparalleled features and tools that will revolutionize the way you train, compete, and achieve your goals.

                                        Remember, success favors those who embrace innovation and strive for greatness. It's time to elevate your game with JBF – the ultimate sport tracking app for champions like you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default SubmitUser