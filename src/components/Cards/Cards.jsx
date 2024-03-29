import './Cards.css'
import React, {useState} from 'react';

export default function Cards(props) {
    let [expand, setExpanded] = useState("");
    const cardStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
    };
    const blurBackground = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundImage: `url(${props.image})`,
        filter: 'blur(4px)',
    }
    const textStyle = {
        position: 'relative',
        zIndex: 1,
    };
    return (
            <div>
                <div id={props.id} onMouseEnter={() => {setExpanded(props.id)}} onMouseLeave={() => {setExpanded("")}} className={`cards ${expand === props.id ? "enlarged" : ""} ${props.className}`} style = {cardStyle} >
                <div style={expand ? blurBackground : null}></div>
                <h1 className="card-headings"style={textStyle} >{props.heading}</h1>
                    <div className={` ${expand === props.id ? "content" : "hidden"}`} style={textStyle} >
                        {props.content}
                    </div>
                </div>
            </div>
    )
}