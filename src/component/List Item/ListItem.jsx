import { useState } from 'react'
import {Link} from "react-router-dom"
import React from 'react'
import image from "../../assets/image.jpg"
import "./ListItem.scss"
import { AddCircleRounded } from '@material-ui/icons';
import { PlayCircleFilledRounded } from '@material-ui/icons'
import { ThumbDown } from '@material-ui/icons'
import { ThumbUp } from '@material-ui/icons'

import trailer from "../../assets/trailer.mp4"


export default function ListItem() {

    const [isHovered, setIsHovered] = useState(false)

    //const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

    return (
        <div className="list-item">
              <div className="item" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                   {isHovered ? (
                          <div className="hover-div" >
                   
                               <div className="hover-video" >
                                    <video src={trailer} autoPlay={true} loop/>
                                    <div className="vid-details">
                                         <div className="vid-runtime">
                                              1 hr 49 min
                                         </div>
                                         <div className="vid-age">
                                              <div className="vid-age-div">+16</div>
                                         </div>
                                         <div className="vid-date">
                                              1999
                                         </div>
                                    </div>
                                    <div className="vid-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit nesciunt 
                                       numquam exercite a repellat illo accusantium, rem, veritatis laudantium beatae! Mollitia voluptatibus. 
                                     </div>
                                     <div className="vid-icons">
                                          <Link to="/Preview"><PlayCircleFilledRounded className="play-icon"/></Link>
                                          <AddCircleRounded />
                                          <ThumbUp />
                                          <ThumbDown />
                                     </div>
                                     <div className="vid-genre">Action</div>

                               </div>
                               <div className="hover-text">

                               </div>
                               <div className="hover-icons">

                               </div>

                          </div>
                   ) : (<img src={image} alt="" />)}
              </div>
        </div>
    )
}
