import './Navbar.css' 
import Code from '../Images/code-solid.svg'
import React, {useEffect, useState} from 'react'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(sessionStorage.getItem('activeLink') || 'home');
    const handleLinkClick = link => setActiveLink(link);
    useEffect(()=>{sessionStorage.setItem('activeLink',activeLink)},[activeLink]);
    // I now know what to do
    const [shrunk, setShrunk] = useState("")
    window.addEventListener("resize", () => {
        if (window.innerWidth < 600) {
            setShrunk("mobile")
        } else if (window.innerWidth < 800) {
            setShrunk("tablet")
        } else {
            setShrunk("normal")
        }
    })
    return(
        <nav id={`${shrunk === "tablet" ? "tablet" : shrunk === "mobile" ? "mobile" : "top-nav"}`} className={`hey ${shrunk === "mobile" ? "mobile" : ""} `}>
            <ul>
                <li>
                    <a href="/" id="nav-title">Diremu.</a><img src={Code} alt=""  id="code-image"/>
                    </li>
                <li className={activeLink === 'home' ? "active" : ""}>
                    <a href="home" onClick={()=> handleLinkClick("home")}>Home</a>
                    </li>
                <li className={activeLink === 'about' ? "active" : ""}>
                    <a href="about" onClick={()=> handleLinkClick("about")}>About</a>
                    </li>
                <li className={activeLink === 'projects' ? "active" : ""}>
                    <a href="projects" onClick={()=> handleLinkClick("projects")}>Projects</a>
                    </li>
                <li className={activeLink === 'contact' ? "active" : ""}>
                    <a href="contact" onClick={()=> handleLinkClick("contact")}>Contact</a>
                    </li>
                <a href={`javascript:void(0)`} className={`${(shrunk === "tablet" || shrunk === "mobile") ? "visible" : "hidden" }`}>&#9776;</a>                
            </ul>
        </nav>
    )
}

export default Navbar;