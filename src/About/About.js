import  './About.css';
import React from 'react';
import Cards from '../components/Cards/Cards';
import Ope from "./pic.png";

const About = () => {
    return(
    <div id="about">
        <h2 id="about-h">ABOUT</h2>
        <div id="cards-container">
            <Cards id="first-card" heading="Education" content={
                <>
                    <p id="learning-divh">I started my primary education in the <a href="https://smsabuja.com" target="_blank" rel="noreferrer">Stella Maris School</a> located in Abuja, Nigeria. I finished my primary education at Primary 5 in the Early Beginners School. I went on to spend 6 years in the boarding school <a href="https://bhsa.org" target="_blank" rel="noreferrer" >Baptist High School</a>, Abuja.</p>
                    <p>Afterwards, I then went on to pursue a Bachelor's Degree in Computer Science in <a href="https://lmu.edu.ng" target="_blank" rel="noreferrer">Landmark University</a>, Kwara State, Nigeria. In this environment, I have had the opportunity to begin a path up the career of Full-Stack Engineering.</p>
                </>
            }className="life-divs" />

            <Cards id="second-card" heading="Inspiration" content= {
                <p>Since the 1990s, Website making and designing has become ever more of a big deal. To take part in such an industry and possibly contribute to it such that the entire community is appreciative of that effort is enough of a reason for me to venture into the career of Full-Stack Engineering.</p>
            }className="life-divs" />
        </div>
        <div>
            <h3 id="growth"><span>MY GROWTH</span></h3>
            <p id="growth-p">My milestones so far have been:
                <ol id="experience-list">
                    <li>Embarking on a 3-month internship with people from Graphic designers and Product desginers to Frontend and FullStack Engineers. This gave me the opportunity to enhance social skills as well as Real-time collaboration.</li>
                    <li>Using the languages and technologies at my disposal on Projects that are comparable to real world applications.</li>
                </ol>
            </p>
            <p id="growth-pp">As of my stay in school, I have improved upon my knowledge in CSS and React and begun my mission to truly become a Full-Stack Engineer. I have also learnt many concepts through the curriculum that will be helpful to my career.</p>
        </div>
        {/* <div id="new-cards">
            <div id="new-cards-img">
                <img src={Ope} alt="" />
                <div></div>
            </div>
            <div id="new-cards-text"></div>
        </div> */}
    </div>
)
}

export default About;