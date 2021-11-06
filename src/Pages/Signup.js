import React from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import "./signup.css"

export const Signup = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [name, setName] = React.useState("");

    const history = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const checkEmail = validator.isEmail(email);
        const checkPassword = (password.length > 10);
        const checkConfirmPassword = validator.equals(confirmPassword, password);
        const checkName = name === ""

        let emailContainer = document.getElementById('email');
        let passContainer = document.getElementById('password');
        let nameContainer = document.getElementById('name');
        let confirmPasswordContainer = document.getElementById('confirmPassword')

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

        if (checkName) {
            nameContainer.classList.add("invalid");
        } else {
            nameContainer.classList.remove("invalid");
        }
        if (checkConfirmPassword) {
            confirmPasswordContainer.classList.remove("invalid")
        } else {
            confirmPasswordContainer.classList.add('invalid')
        }


        if (checkPassword && checkEmail && checkConfirmPassword && !checkName) {
            history("/")
        }
    }

    return (
        <div className="main-container">
            <div className="signup-container">
                <h1 className="signup-head">Sign-up</h1>
                <div className="form-container">
                    <form onSubmit={handleSubmit}
                        className="form"
                    >
                        <input type="text"
                            id="name"
                            placeholder="Name"
                            className="text-container sign"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            className="text-container sign"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <input
                            id="password"
                            type="password"
                            className="text-container sign"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            id="confirmPassword"
                            type="password"
                            className="text-container sign"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <input type="submit" value="Signup" className="login-btn signUP" />
                    </form>
                </div>
            </div>
        </div>
    )
}
