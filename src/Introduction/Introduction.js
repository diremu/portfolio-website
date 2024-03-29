import './Introduction.css'
import background from './media/background.mp4';
import Code from '../components/Images/code-solid.svg';

function Introduction() {
    return (
        <div id="introduction">
            <div><nav id="intro-nav"><ul><li><a href="home"  id="intro-nav-title">Diremu.</a><img src={Code} alt=""  id="code-image"/></li></ul></nav></div>
            <div id="introduction-div">
                <p>I'm Diremu Adebanjo and I bring the best tool in the shed for solo clients.</p>
                <div id="explore-link">
                    <a href="home">Explore <span id="arrow">&rarr;</span></a>
                </div>
                {/* <div id="home-div">
                    <div className="video-wrapper">
                        <video autoPlay  muted loop id="myVideo">
                            <source src={background} type="video/mp4" />
                        </video>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Introduction;