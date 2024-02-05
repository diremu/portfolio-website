import './Cards.css'
import React, {useState} from 'react';

function DivBuilder() {
    return ( 
    <>
        <button type="button" id="popped-up">
            <div className="hidden"></div>
            <div className="content">
                <h1>Education</h1>
                <p>Hello there. i want to see the world sometime later.</p>
            </div>
            <div className="hidden"></div>
        </button>
    </>
    )
}

export default function Cards() {
    let [expand, setExpanded] = useState("");
    return (
        <>
        <div id="cards-container">
            <button type="button" onClick={DivBuilder}  className={`cards ${expand === "first-card" ? "enlarged" : ""}`}>
                <div id="first-card">
                <h1>Education</h1>
            </div>
            </button>
            <button type="button" onClick={() => {setExpanded("second-card")}}  className={`cards ${expand === "second-card" ? "enlarged" : ""}`}>
                <div id="second-card">
                <h1>Education</h1>
            </div>
            </button>
            <button type="button" onClick={() => {setExpanded("third-card")}}  className={`cards ${expand === "third-card" ? "enlarged" : ""}`}>
                <div id="third-card">
                <h1>Education</h1>
            </div>
            </button>
        </div>
        </>
    )
}