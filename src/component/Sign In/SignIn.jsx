import { useState } from "react"
import { Link } from "react-router-dom"
import "./SignIn.scss"
import image from "../../assets/signin.jpg"
import logo from "../../assets/Netflix_logo.jpg"

import React from 'react'

export default function SignIn() {

    const [credentials, setCredentials] = useState({
           email: "",
           password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials((previous)=>{
            return {
                ...previous,
                [name] : value
            }
        })
    }

    const {email, password} = credentials;

    const handleSubmit = (event) => {
        event.preventDefault()
        setCredentials({
           email: "",
           password: ""
        })
    }

    return (
        <div className="login">
            <div className="login-div" style={{backgroundImage: `url(${image})`}}>
                <img src={logo} alt="logo" />
                <div className="container">
                    <div className="sign" onSubmit={handleSubmit}>
                        <form> 
                            <h1>Sign In</h1> 
                            <input name="email" type="email" value={email} onChange={handleChange} placeholder="Enter Your Email address" />
                            <input name="password" type="password" value={password} onChange={handleChange} placeholder="Enter Your Password" />
                            <button className="loginButton" type="submit">Sign in</button>
                            <span>New to Netflix? <Link style={{textDecoration: `none`}} to="/register"><b className="bold-class">Sign up now.</b></Link></span>
                            <div className="small">
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
