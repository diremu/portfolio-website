import './Home.css'
import Navbar from '../components/Navbar/Navbar';
import { useInView } from 'react-intersection-observer'; 

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
            span.style.transitionDelay = `${index * 120}ms`;
            textElement.appendChild(span)
        })
        setTimeout(() => {
            textElement.style.transform = 'translateY(0%)';
          }, 0)})
    return (
        <>
            <Navbar />
            <h2 id="home-head" className={`${inView ? "visible" : "hidden"}`} ref={ref}>Under Construction</h2>      
        </>
    )
}