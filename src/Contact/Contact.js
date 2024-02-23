import './Contact.css'
import Navbar from '../components/Navbar/Navbar';
import Reddit from '../components/Images/Reddit_Icon_FullColor.png';
import Gmail from '../components/Images/gmail.png';
import Twitter from '../components/Images/twitter.png'

export default function Contact() {
    return(
    <div id="contact">
        <div id="contact-div">
            <p id="contact-p">
                If you wish to inquire me for my skills or my professional advice, you may contact me through the following handles:
            </p>
            <nav id="contact-nav">
                <ul>
                    <li><span>Reddit  -  </span><a href="https://reddit.com"><img src={Reddit} alt="" className="social-handles" /></a></li>
                    <li><span>Gmail  -  </span><a href="https://gmail.com"><img src={Gmail} alt="" className="social-handles" /></a></li>
                    <li><span>Twitter  -  </span><a href="https://twitter.com"><img src={Twitter} alt="" className="social-handles" /></a></li>
                </ul>
            </nav>
        </div>    
    </div>)
}

// For this write if you wish to inquire me for my skills or professional advice, contact me through the following handles.
// There would be a navabr at the side that contains all the handles and would be scrollable and if not possible, i will just put four or three.