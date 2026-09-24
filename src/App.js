import { useState } from "react";
import projects from "./data/projects";
import NotFound from './components/404'
import ProjectCard from './components/Project'
import "./App.css";
import {TOOLS, PALETTES} from './components/index'

export default function App() {
  const [i, setI] = useState(0);
  if (window.location.pathname !== "/") return <NotFound />;

  const [c1, c2, c3, c4] = PALETTES[i];
  return (
    <div className="app" style={{ "--c1": c1, "--c2": c2, "--c3": c3, "--c4": c4 }}>
      <div className="wrap">
        <nav aria-label="Main">
          <div className="links">
            <a className="pill" href="#work">Work</a>
            <a className="pill" href="#about">About</a>
            <a className="pill" href="#contact">Contact</a>
          </div>
          <button className="pill" type="button"
            onClick={() => setI((i + 1) % PALETTES.length)}>
            Shuffle colors
          </button>
        </nav>

        <header className="hero">
          <h1><span className="a">Diremu</span> <span className="b">Adebanjo</span></h1>
          <p className="tag">
            A Skilled Frontend Developer capable of bringing value across the board.
          </p>
          <div className="cta">
            <a className="pill hot" href="#work">See my work</a>
            <a className="pill" href="https://github.com/diremu">GitHub</a>
          </div>
        </header>

        <main>
          <section id="work" aria-labelledby="work-h">
            <h2 id="work-h">Things I've built</h2>
            <div className="grid">
              {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
            </div>
          </section>

          <section id="about" className="about" aria-labelledby="about-h">
            <div>
              <h2 id="about-h">About me</h2>
              <p>I'm a Computer Science graduate of Landmark University (class of 2026). My work sits where web design meets machine learning: I like turning a Figma file into a fast, accessible interface, and I've also spent months training and deploying a deep learning system.</p>
              <p>I'm looking for frontend and web design roles or internships where I can keep shipping interfaces and learning from a team.</p>
              <div className="exp">
                <b>Angular internship</b><br />
                Turned Figma designs into Angular and SCSS components, including sortable, filterable data tables.
              </div>
            </div>
            <div>
              <h2>Tools</h2>
              <div className="tape">{TOOLS.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </section>

          <section id="contact" className="contact" aria-labelledby="contact-h">
            <h2 id="contact-h">Let's build something</h2>
            <p>Hiring, collaborating, or just curious? Reach out.</p>
            <a className="pill" href="mailto:diremuadebanjo@gmail.com">Email me</a>
            <a className="pill" href="https://github.com/diremu">GitHub</a>
          </section>
        </main>
        <footer>© 2026 Diremu Adebanjo</footer>
      </div>
    </div>
  );
}