import React from 'react'
import { Link } from 'react-router-dom'
import "./Preview.scss"
import { ArrowBackRounded } from '@material-ui/icons'

import trailer from "../../assets/trailer.mp4"

export default function Preview() {
    return (
        <div className="preview">
            <div className="preview-div">
                 <div className="vid-div">
                       <video src={trailer} controls />
                       <div className="arrow-back">
                           <Link to="/"><ArrowBackRounded /></Link>
                       </div>
                 </div>
            </div>
        </div>
    )
}
