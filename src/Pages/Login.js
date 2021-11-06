import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import validator from 'validator'
import "./login.css"


export const Login = () => {
    const history = useNavigate()
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = validator.isEmail(email);
        const checkPassword = (password.length > 10)

        let emailContainer = document.getElementById('email');
        let passContainer = document.getElementById('password');

        if (!checkEmail) {
            emailContainer.classList.add('invalid')
        } else {
            emailContainer.classList.remove('invalid')
        }
        if (checkPassword) {
            passContainer.classList.remove('invalid')
        } else {
            passContainer.classList.add('invalid')
        }

        if (checkEmail && checkPassword) {
            history("/")
        }
    }

    return (
        <div className="main-container">
            <div className="login-container">
                <h1 className="login-head">Login</h1>
                <div className="form-container">
                    <form onSubmit={handleSubmit}
                        className="form"
                    >
                        <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            className="text-container"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <input
                            id="password"
                            style={{ marginTop: "1em", marginBottom: "1em" }}
                            type="password"
                            className="text-container"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input type="submit" value="Login" className="login-btn" />
                        <NavLink to="/login"
                            className="link"
                        >
                            <p>
                                Forgot password?
                            </p>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}
