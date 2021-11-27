import React from 'react'
import "./Featured.scss"
import picture from "../../assets/got.jpg"
import picture2 from "../../assets/got_logo8.png"
import { PlayArrow } from '@material-ui/icons'
import { Info } from '@material-ui/icons'

export default function Featured() {
    return (
        <div className="featured">
            <div className="contain">
                <div className="genre">
                    <select name="genre" id="genre-div">
                          <option>Genre</option>
                          <option value="adventure">Adventure</option>
                          <option value="comedy">Comedy</option>
                          <option value="crime">Crime</option>
                          <option value="fantasy">Fantasy</option>
                          <option value="historical">Historical</option>
                          <option value="horror">Horror</option>
                          <option value="romance">Romance</option>
                          <option value="sci-fi">Sci-fi</option>
                          <option value="thriller">Thriller</option>
                          <option value="western">Western</option>
                          <option value="animation">Animation</option>
                          <option value="drama">Drama</option>
                          <option value="documentary">Documentary</option>
                    </select>
                </div>
                
                <img className="img1" src={picture}
                alt="" />
                <div className="details">
                     <img className="img2" src={picture2}
                     alt="" />
                     <div className="sub-details">
                         <div className="season">SEASON  6</div>
                         <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda excepturi atque minus 
                           dignissimos iure aliquid nostrum expedita consequatur aperiam, dolores laborum voluptatem temporibus tempora, quas,
                           numquam praesentium ipsa quam dolore.
                         </div>
                         <div className="button-list">
                              <div className="play">
                                  <PlayArrow />
                                  <span>Play</span>
                              </div>
                              <div className="info">
                                  <Info />
                                  <span>info</span>
                              </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}
