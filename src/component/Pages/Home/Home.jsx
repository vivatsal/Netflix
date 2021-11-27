import Navbar from "../../Navbar/Navbar"
import Featured from "../../Featured/Featured"
import List from "../../../component/List/List"
import Preview from "../../Preview/Preview"
import SignUp from "../../Sign Up/SignUp"
import SignIn from "../../Sign In/SignIn"
import "./Home.scss"

import React from 'react'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
            <div className="footer" />
        </div>
    )
}

export default Home;
