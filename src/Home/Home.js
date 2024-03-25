import './Home.css'
import Navbar from '../components/Navbar/Navbar';
import { useInView } from 'react-intersection-observer'; 
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

export default function Home() {
    document.title = "Home | Diremu";
    const [ref, inView] = useInView({triggerOnce: true,})
    document.addEventListener('DOMContentLoaded',function () {
        const textElement = document.getElementById('home-head')
        const textBody = textElement.textContent.trim()
        const letters = textBody.split("")
        textElement.textContent = '';
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.transitionDelay = `${index * 250}ms`;
            textElement.appendChild(span)
        })
        setTimeout(() => {
            textElement.style.transform = 'translateY(0%)';
          }, 400)})
    return (
        <div id="home">
            <Navbar />
            <div id="home-mdiv">
                <h2 id="home-head" className={`${inView ? "visible" : "hidden"}`} ref={ref}>INTRO</h2>
                <p id="home-para">As an aspiring Computer science student set to graduate with a Bachelor's Degree in the 2nd quarter of 2026, I have been on the path of learning and mastering the latest as well as the most stable technologies in this industry. As a result of learning and constant practice, I have acquired a plethora of skills that I am certain to use and fufill whatsoever job I'm given.</p>
            </div>
            <About />
            <Projects />
            <Contact />
        </div>
    )
}