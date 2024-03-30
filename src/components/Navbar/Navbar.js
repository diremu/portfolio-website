import './Navbar.css' 
import Code from '../Images/code-solid.svg'
import React, {useEffect, useState} from 'react'
import Bar from '../Images/bars-solid.svg'

// function DropdownMenu() {
//     // should have a toggle state
//     // should also create a div that dropdowns when the toggle part is on
//     // consists of mini-links that still use react-router

//     return (
//         <>

//         </>
//     )
// }

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(sessionStorage.getItem('activeLink') || 'home');
    const handleLinkClick = link => setActiveLink(link);
    useEffect(()=>{sessionStorage.setItem('activeLink',activeLink)},[activeLink]);
    // I now know what to do
    const [shrunk, setShrunk] = useState("")
    window.addEventListener("DOMContentLoaded", () => {
        if (window.innerWidth < 600) {
            setShrunk("mobile")
        } else if (window.innerWidth < 800) {
            setShrunk("tablet")
        } else {
            setShrunk("normal")
        }
    })
    window.addEventListener("resize", () => {
        if (window.innerWidth < 600) {
            setShrunk("mobile")
        } else if (window.innerWidth < 800) {
            setShrunk("tablet")
        } else {
            setShrunk("normal")
        }
    })
    const [dropdown, setDropdown] = useState(false);
    return(
        <nav id={`${shrunk === "tablet" ? "tablet" : shrunk === "mobile" ? "mobile" : "top-nav"}`}>
            <ul>
                <li>
                    <a href="/" id="nav-title">Diremu.</a><img src={Code} alt=""  id="code-image" />
                    </li>
                <li className={activeLink === 'home' ? "active" : ""} >
                    <a href="#home" onClick={()=> handleLinkClick("home")}>Home</a>
                    </li>
                <li className={activeLink === 'about' ? "active" : ""}>
                    <a href="#about" onClick={()=> handleLinkClick("about")}>About</a>
                    </li>
                <li className={activeLink === 'projects' ? "active" : ""}>
                    <a href="#projects" onClick={()=> handleLinkClick("projects")}>Projects</a>
                    </li>
                <li className={activeLink === 'contact' ? "active" : ""}>
                    <a href="#contact" onClick={()=> handleLinkClick("contact")}>Contact</a>
                    </li>
                <button className={`${(shrunk === "tablet" || shrunk === "mobile") ? "visibleNav" : "hidden" }`} onClick={() => {setDropdown(!dropdown)}}><img src={Bar} alt="" id="bar-img" />
                </button>                
                <div className={`dropdown ${dropdown ? "dropdown-show" : "hidden"}`}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>  
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;