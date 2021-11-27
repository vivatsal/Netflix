import { useState, useRef } from 'react'
import React from 'react'
import "./List.scss"
import { ArrowForwardIos } from '@material-ui/icons'
import { ArrowBackIos } from '@material-ui/icons'
import ListItem from '../List Item/ListItem'

export default function List() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (props) => {

        const distance = listRef.current.getBoundingClientRect().x - 10
        console.log(distance)

        if(props === "right"){  
            if(slideNumber>0){
                setIsMoved(true)
                setSlideNumber(slideNumber - 1) 
                console.log(slideNumber)
                listRef.current.style.transform = `translateX(${distance+246}px)`
            }
        }

        if(props === "left"){
            if(slideNumber<4){
                setIsMoved(true)       
                setSlideNumber(slideNumber + 1) 
                listRef.current.style.transform = `translateX(${(distance-246)}px)`
                console.log(slideNumber)
            }
        }

    }

    return (
        <div className="list">
            <div className="head">
                Continue to Watch
            </div>
            <div className="slide">
               <div >
                  {slideNumber<4 ? <ArrowForwardIos onClick={()=>handleClick("left")} className="for-arrow"/> : null}
                  {slideNumber>0 ? <ArrowBackIos onClick={()=>handleClick("right")} className="back-arrow"/> : null}
               </div>

            <div className="collections" ref={listRef}>
               <ListItem index={0} />
               <ListItem index={1} />
               <ListItem index={2} />
               <ListItem index={3} />
               <ListItem index={4} />
               <ListItem index={5} />
               <ListItem index={6} />
               <ListItem index={7} />
               <ListItem index={8} />
               <ListItem index={9} />
            </div>

            </div>
        </div>
    )
}
