import './Footer.css'
import Gmail from '../Images/gmail.png'
import Reddit from '../Images/reddit.png'
import Twitter from '../Images/twitter-logo.png'

function Footer() {
    return (
        <div>
            <p>You can contact me at the following handles:</p>
            <nav>
                <li>
                    <ul><a href="https://twitter.com" target="_blank" rel="noreferrer" ><img src={Gmail} alt="Gmail" /></a></ul>
                    <ul><a href="https://reddit.com" target="_blank" rel="noreferrer" ><img src={Reddit} alt="Reddit"/></a></ul>
                    <ul><a href="https://twitter.com" target="_blank" rel="noreferrer" ><img src={Twitter} alt="Twitter" /></a></ul>
                </li>
            </nav>
        </div>
    )
}

export default Footer();