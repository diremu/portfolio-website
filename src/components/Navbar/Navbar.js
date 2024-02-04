import './Navbar.css' 
import Code from '../Images/code-solid.svg'
import React, {useEffect, useState} from 'react'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(sessionStorage.getItem('activeLink') || 'home');
    const handleLinkClick = link => setActiveLink(link);
    useEffect(()=>{sessionStorage.setItem('activeLink',activeLink)},[activeLink])
    return(
        <nav id="top-nav">
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
            </ul>
        </nav>
    )
}

export default Navbar;