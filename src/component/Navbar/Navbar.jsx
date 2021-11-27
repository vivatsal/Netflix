import React from 'react'
import { useState } from 'react'
import image from "../../assets/Netflix_logo.jpg"
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { Search } from '@material-ui/icons'
import { Notifications } from '@material-ui/icons'
import { ArrowDropDown } from '@material-ui/icons'

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    };

    return (
        <div className = { isScrolled ? "navbar scrolled" : "navbar"}>
           <div className="container">
               <div className="left">
                   <div className="image">
                       <img className="img" src={image} alt="logo" />
                   </div>
                   <div className="Homepage">Homepage</div>
                   <div className="Series">Series</div>
                   <div className="movies">Movies</div>
                   <div className="popular">New and Popular</div>
                   <div className="mylist">My List</div>
               </div>
               <div className="right">
                   <div className="search"><Search /></div>
                   <div className="kid">KID</div>
                   <div >
                         <Link to="/login"><img className="photo" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                          alt=""/></Link>
                   </div>
                   <div className="notif"><Notifications /></div>
                   <div className="arrow">
                       <ArrowDropDown onClick={()=>setIsHidden(!isHidden)}/>
                       
                   </div>
               </div>
           </div>
           {isHidden ? null : (<div className="widgets">
                           <div className="settings">Settings</div>
                           <div className="logout">Log Out</div>
            </div>) }
        </div>
    )
}
