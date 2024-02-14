import './Navbar.css' 
import Code from '../Images/code-solid.svg'
import React, {useEffect, useState} from 'react'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(sessionStorage.getItem('activeLink') || 'home');
    const handleLinkClick = link => setActiveLink(link);
    useEffect(()=>{sessionStorage.setItem('activeLink',activeLink)},[activeLink]);
    // I now know what to do
    return(
        <nav id="top-nav" className="hey">
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
                {/* <a href={`javascript:void(0)`} className='icon' onClick={myFunction()}>&#9776;</a> */}
            </ul>
        </nav>
    )
}

export default Navbar;