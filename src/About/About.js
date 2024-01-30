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
                <p>I started my primary education in the <a href="https://smschools.com" target="_blank" rel="noreferrer">Stella Maris School</a> located in Abuja, Nigeria. I finished my primary education at Primary 5 in the Early Beginners School. I went on to spend 6 years in the boarding school <a href="https://bhsa.org" target="_blank" rel="noreferrer" >Baptist High School</a>, Abuja.</p>
                {/* Add links to the school names */}
                <p>Afterwards, I then went on to pursue a Bachelor's Degree in Computer Science in <a href="https://lmu.edu.ng" target="_blank" rel="noreferrer" >Landmark University</a>, Kwara State, Nigeria. In this environment, I have had the opportunity to begin a path up the career of Full-Stack Engineering.</p>
            </div>
        </div>
        <div className="life-divs" id="passion-div">
            <div id="p-hdiv"><h2>Inspiration</h2></div>        
            <div>
                <p>Since the 1990s, Website making and designing has become ever more of a big deal. To take part in such an industry and possibly contribute to it such that the entire community is appreciative of that effort is enough of a reason for me.</p>
            </div>
        </div>
        <div className="life-divs" id="learning-div"></div>
    </div>
    <Footer />
    </>
)
}

export default About;