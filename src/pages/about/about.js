import React, { useState, useEffect } from 'react';
import './about.css';

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActive = null;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentActive = section.id;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div><h1 className="header">ABOUT</h1>
    <div className="table-container">
      <div className="table-of-contents">
        <ul>
          <li className={activeSection === 'section1' ? 'active' : ''}><a href="#section1">Skill</a></li>
          <li className={activeSection === 'section2' ? 'active' : ''}><a href="#section2">Experience</a></li>
          <li className={activeSection === 'section3' ? 'active' : ''}><a href="#section3">Education</a></li>
        </ul>
      </div>
      <div className="content">
        <section id="section1">
          <h2>Skill</h2>
          <p>I can use a variety of tools for <span className="highlight-pink">VR/AR, web development, AI research, UX/UI design, 3D modeling</span>, and can independently manage the entire process of problem identification, user research, planning, design, and development.<br></br>
          <h3>Development</h3>
          Programming Language: Python, C, C++, C#, Java, JavaScript, Scala, html, css
          <h3>AI Research</h3>
          Deep Learning Framework: PyTorch, TensorFlow
          <h3>Design</h3>
          Design Tool: Figma, Illustrator, Premiere Pro, After Effect, Photoshop, Procreate
          <h3>3D modeling</h3>
          3D Modeling/Rendering Tool: Blender, Fusion360, Rhino, Keyshot
          <h3>Language</h3>
          Korean, English
          </p>
          <br></br>

        </section>
        <section id="section2">
          <h2>Experience</h2>
          <p>
            <h3>Internship</h3>
            <span className="highlight-bold">Visual Media Lab</span>, KAIST <br></br>
            Advisor: Junyong Noh <br></br>
            <div className="highlight-gray">Undergraduate Intern, Computer Vision, Computer Graphics</div>
            <br></br>
            <span className="highlight-bold">Neosapience</span>, Gangnam-gu, Seoul <br></br>
            <div className="highlight-gray">AI Research Intern, Multi Language TTS</div>
            <br></br>
            <span className="highlight-bold">Geometric AI Lab</span>, KAIST <br></br>
            Advisor: Minhyuk Sung <br></br>
            <div className="highlight-gray">Undergraduate Intern, Computer Vision, Computer Graphics</div>
            <br></br>
            <span className="highlight-bold">Sketch Lab</span>, KAIST <br></br>
            Advisor: Seok-Hyung Bae <br></br>
            <div className="highlight-gray">Undergraduate Intern, VR, HCI</div>
          </p>
          <br></br>

        </section>
        <section id="section3">
          <h2>Education</h2>
          <p>
            <h3>BS</h3>
            <span className="highlight-bold">KAIST</span> (Korea Advanced Institute of Science and Technology) <br></br>
            School of Computing (Major) <br></br>
            Industrial Design (Double Major) <br></br>
            <div className="highlight-gray">GPA 3.91/4.3</div>
          </p>
        </section>
      </div>
    </div>
    </div>
  );
};

export default About;

