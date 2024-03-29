import './Contact.css'
import Reddit from '../components/Images/Reddit_Icon_FullColor.png';
import Gmail from '../components/Images/gmail.png';
import Twitter from '../components/Images/twitter.png'

export default function Contact() {
    return(
    <div id="contact">
        <div id="contact-div">
            <p id="contact-p">
                Do you want to contact me? Do so through the following channels:
            </p>
            <nav id="contact-nav">
                <ul>
                    <li><a href="https://reddit.com"><img src={Reddit} alt="" className="social-handles" /></a></li>
                    <li><a href="https://gmail.com"><img src={Gmail} alt="" className="social-handles" /></a></li>
                    <li><a href="https://twitter.com"><img src={Twitter} alt="" className="social-handles" /></a></li>
                </ul>
            </nav>
        </div>    
    </div>)
}