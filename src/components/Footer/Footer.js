import './Footer.css'
import Gmail from '../Images/gmail.png'
import Reddit from '../Images/reddit.png'
import Twitter from '../Images/twitter-logo.png'

function Footer() {
    return (
        <div className="footer-container">
            <p>You can contact me at the following handles:</p>
            <nav className="footer-nav">
                <li>
                    <ul><a href="https://gmail.com" target="_blank" rel="noreferrer"  ><img src={Gmail} alt="Gmail" className="social-handle"  /></a></ul>
                    <ul><a href="https://reddit.com" target="_blank" rel="noreferrer"  ><img src={Reddit} alt="Reddit" className="social-handle" /></a></ul>
                    <ul><a href="https://twitter.com" target="_blank" rel="noreferrer"  ><img src={Twitter} alt="Twitter" className="social-handle"  /></a></ul>
                </li>
            </nav>
        </div>
    )
}

export default Footer;