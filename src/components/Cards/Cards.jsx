import './Cards.css'
import React, {useState} from 'react';

export default function Cards(props) {
    let [expand, setExpanded] = useState("");
    return (
        <div id="cards-container">
            <div>
                <div id={props.id} onMouseEnter={() => {setExpanded(props.id)}} onMouseLeave={() => {setExpanded("")}} className={`cards ${expand === props.id ? "enlarged" : ""} ${props.className}`}>
                <h1 className="card-headings">{props.heading}</h1>
                <div className={` ${expand === props.id ? "content" : "hidden"}`} >
                    {props.content}
                </div>
            </div>
            </div>
        </div>
    )
}