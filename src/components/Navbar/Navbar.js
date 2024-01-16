import './Navbar.css' 
import Code from '../Images/code-solid.svg'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>Diremu.</li>
                <li className="selected"><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills and Works</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;