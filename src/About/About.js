import  './About.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
    return(
    <>
    <Navbar />
    <div id="about-div">
        <div className="life-divs" id="education-div">
            <h2>My Education</h2>
            <div>
                <p>I started my primary education in the Stella Maris Schools located in Abuja, Nigeria. I finished my primary education at Primary 5 in the Early Beginners School. I went on to spend 6 years in the boarding school Baptist High School, Abuja.</p>
                {/* Add links to the school names */}
                <p>Afterwards, I then went on to pursue a Bachelor's Degree in Computer Science in Landmark University, Kwara State, Nigeria. In this environment, I have had the opportunity to begin a path up the career of Full-Stack Engineering.</p>
            </div>
        </div>
        <div className="life-divs" id="passion-div"></div>
        <div className="life-divs" id="learning-div"></div>
    </div>
    <Footer />
    </>
)
}

export default About;