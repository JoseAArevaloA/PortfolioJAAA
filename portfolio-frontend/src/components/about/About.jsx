import React from 'react';
import './about.css';
import AboutImg from '../../assets/Aboutme.jpeg';
import CV from '../../assets/HV-Jose-Arevalo.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Profile</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                I am an environmental engineer, 
                I am passionate about challenges and leadership. 
                My engineering background makes me stand out in problem solving, 
                web development provides me with valuable tools to implement such solutions
                and I'm always curious to learn more when it comes to new technologies.
                </p>
                <a download='' href={CV} className="button button-flex">
                    Download CV
                    <i class='bx bxs-file-pdf' ></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
