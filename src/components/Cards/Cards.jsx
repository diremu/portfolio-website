import './Cards.css'
import React, {useState} from 'react';

export default function Cards() {
    let [expand, setExpanded] = useState("");
    return (
        <>
        <div id="cards-container">
            <button type="button" onMouseEnter={() => {setExpanded("first-card")}} onMouseLeave={() => {setExpanded("")}}  className={`cards ${expand === "first-card" ? "enlarged" : ""}`}>
                <div id="first-card">
                <h1 className="card-headings">Education</h1>
                <div className={` ${expand === "first-card" ? "content" : "hidden"}`} >
                    My education sbeeisjf sjhjsbhf sefk srh sheshbd haoweh.
                </div>
            </div>
            </button>
            <button type="button" onMouseEnter={() => {setExpanded("second-card")}} onMouseLeave={() => {setExpanded("")}}  className={`cards ${expand === "second-card" ? "enlarged" : ""}`}>
                <div id="second-card">
                <h1 className="card-headings">Education</h1>
                <div className={`${expand === "second-card" ? "content" : "hidden"}`} >
                    My education sbeeisjf sjhjsbhf sefk srh sheshbd haoweh.
                </div>
            </div>
            </button>
            <button type="button" onMouseEnter={() => {setExpanded("third-card")}} onMouseLeave={() => {setExpanded("")}}  className={`cards ${expand === "third-card" ? "enlarged" : ""}`}>
                <div id="third-card">
                <h1 className="card-headings">Education</h1>
                <div className={` ${expand === "third-card" ? "content" : "hidden"}`} >
                    My education sbeeisjf sjhjsbhf sefk srh sheshbd haoweh.
                </div>
            </div>
            </button>
        </div>
        </>
    )
}