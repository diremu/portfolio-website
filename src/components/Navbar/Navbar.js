import './Navbar.css' 
import Code from '../Images/code-solid.svg'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><span id="nav-title">Diremu.</span> <img src={Code} alt=""  id="code-image"/></li>
                <li className="selected"><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;