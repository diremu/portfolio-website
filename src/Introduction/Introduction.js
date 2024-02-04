import './Introduction.css'
import background from './media/background.mp4';
import Code from '../components/Images/code-solid.svg';

function Introduction() {
    return (
        <>
            <div><nav id="intro-nav"><ul><li><a href="home"  id="intro-nav-title">Diremu.</a><img src={Code} alt=""  id="code-image"/></li></ul></nav></div>
        <div id="introduction">
            <p>"Welcome to a visual journey where creativity meets craftsmanship, showcasing a portfolio that transcends boundaries and brings ideas to life with passion and precision."</p>
            <div id="explore-link">
                <a href="home">Explore</a>
            </div>
            <div id="home-div">
                <div class="video-wrapper">
                    <video autoPlay  muted loop id="myVideo">
                        <source src={background} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        </>
    )
}

export default Introduction;