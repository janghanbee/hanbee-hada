import React from 'react';
import { Link } from 'react-router-dom';
import './project.css';

const Project = () => {
  return (
    <div>
      <h1 className="header">PROJECT</h1>
      <div className="container">
        <Link to="/multidreamer" className="project-box">
          <img src="img/multidreamer.png" alt="multidreamer" />
          <p>MultiDreamer</p>
        </Link>
        <Link to="/kpop" className="project-box">
          <img src="img/kpop.png" alt="kpop" />
          <p>K-POP</p>
        </Link>
        <Link to="/antifreeze" className="project-box">
          <img src="img/antifreeze.png" alt="antifreeze" />
          <p>ANTIFREEZE</p>
        </Link>
        <Link to="/beer" className="project-box">
          <img src="img/beer.png" alt="beer" />
          <p>Beer Recommendation</p>
        </Link>
        <Link to="/dearestFriend" className="project-box">
          <img src="img/dearestFriend.png" alt="dearestFriend" />
          <p>Dearest Friend</p>
        </Link>
        <Link to="/uniself" className="project-box">
          {/* <img src="img/Final Poster.jpg" alt="UniSelf" /> */}
          <img src="img/uniself.png" alt="UniSelf" />
          <p>Uniself</p>
        </Link>
        <Link to="/nbti" className="project-box">
          <img src="img/nbti.jpg" alt="NBTI" />
          <p>NBTI</p>
        </Link>
        <Link to="/voicePlanet" className="project-box">
          <img src="img/voicePlanet.JPG" alt="voicePlanet" />
          <p>VOICE PLANET</p>
        </Link>
        <Link to="/inPlanet" className="project-box">
          <img src="img/inPlanet.png" alt="inPlanet" />
          <p>in:PLANET</p>
        </Link>
        <Link to="/gsDCQG" className="project-box">
          <img src="img/gsDCQG.png" alt="gsDCQG" />
          <p>Question Generation</p>
        </Link>
        <Link to="/rollingRolling" className="project-box">
          <img src="img/rollingRolling.png" alt="Rolling Rolling" />
          <p>Rolling Rolling</p>
        </Link>
        <Link to="/overTheDoor" className="project-box">
          <img src="img/overTheDoor.png" alt="Over The Door" />
          <p>Over The Door</p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
