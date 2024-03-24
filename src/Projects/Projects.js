import './Project.css';
import html from './media/html.svg';
import css from './media/css.svg';
import react from './media/react.svg';

const Projects = () => {
    return (
    <div id="projects">
        <h2 id="projectsh">PROJECTS</h2>
        <p id="projectsp">- These are the technologies and projects I have created using the technologies and skills at my disposal.
        </p>
        <div id="projectsdiv">
            <img src={html} className="projects-icons"  alt="" />
            <img src={css} className="projects-icons"  alt="" />
            <img src={react} className="projects-icons"  alt="" />
        </div>        
    </div>
    )
}

export default Projects;