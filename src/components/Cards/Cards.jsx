import './Cards.css'
import React, {useState} from 'react';

export default function Cards() {
    let [expand, setExpanded] = useState("");
    return (
        <>
        <div id="cards-container">
            <button type="button" onPointerOver={() => {setExpanded("first-card")}}  className={`cards ${expand === "first-card" ? "enlarged" : ""}`}>
                <div id="first-card">
                <h1>Education</h1>
                <div className={`hidden ${expand === "first-card" ? "enlarged" : ""}`} >
                    My education sbeeisjf sjhjsbhf sefk srh sheshbd haoweh.
                </div>
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