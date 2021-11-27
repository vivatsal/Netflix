import React, { useRef } from 'react'
import { useState } from 'react'
import image from "../../assets/signup.jpg"
import logo from "../../assets/Netflix_logo.jpg"
import "./SignUp.scss"

export default function SignUp() {

    const emailRef = useRef()

    const passwordRef = useRef()

    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const {email, password} = userCredentials;

        if(email && password.length > 8){
            alert("Success")
            console.log(email, password);
            setUserCredentials({
                email: "",
                password: ""
            })
        }

        else{
            alert("Please Enter a valid Password")
            setUserCredentials((previous)=>{
                return {
                    ...previous,
                    password: ""
                }
            })
        }
  
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserCredentials((previous)=>{
            return {
                ...previous,
                [name] : value
            }
        })
    }

    const {email, password} = userCredentials;

    const Toggle = () => {
        
        if(email){
            emailRef.current.style.display = `none`
            passwordRef.current.style.display = `flex`
        }

        else{
            alert("Please Enter a Valid Email.")
        }
        
    }

    return (
        <div className="register">
            <div className="register-div">
                <div className="reg-container" style={{backgroundImage: `url(${image})`}}>
                    <div className="signup" >
                        <img src={logo} alt="logo" />

                        <form onSubmit={handleSubmit}> 
                                <div className="content-div">

                                       <h1>Unlimited movies, TV shows, and more.</h1>
                                       <h2>Watch anywhere. Cancel anytime.</h2>
                                       <p>
                                         Ready to watch? Enter your email to create or restart your membership.
                                       </p>
                                        <div ref={emailRef} className="email-div">
                                            <input 
                                            type="email" 
                                            name="email" 
                                            value={email} 
                                            onChange={handleChange} 
                                            placeholder="Enter Your Email Address" />
                                            <button type="button" onClick={()=>Toggle()} >Get Started</button>
                                        </div>

                                        <div ref={passwordRef} style={{display: `none`}}className="password-div">
                                            <input 
                                            type="password" 
                                            name="password" 
                                            value={password} 
                                            onChange={handleChange} 
                                            placeholder="Enter Your Password" />
                                            <button type="submit">Start</button>
                                        </div>
                                            
                                        )}
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
