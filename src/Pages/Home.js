import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

export const Home = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="left">
                    <h2>Already a user?</h2>
                    <NavLink to="/login">
                        <button className="btn">Login</button>
                    </NavLink>
                </div>
                <div className="right">
                    <h2>New user?</h2>
                    <NavLink to="/signup">
                        <button className="btn">Signup</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
