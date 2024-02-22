import React from 'react';

const VoicePlanet = () => {
  return (
    <div>
      <h1 className="header">VOICE PLANET</h1>
      <div className="project-container">
        <div className="project-textbox">
            <div className="project-description">
            {/* <img src="img/voicePlanet-1.png" alt="kpop" /> */}
            <video muted autoPlay loop>
                <source src="/img/voicePlanet.mp4" type="video/mp4" />
            </video>
            <br></br>
            VOICE PLANET is a personalized voice recorder that links special moments to a specific place. 
            With the VOICE PLANET, users can capture their special moments to a specific place and share them with their loved ones. 
            They'll only be able to hear the voice message when they visit that exact same spot, creating a one-of-a-kind experience that's sure to leave a lasting impression.
            <br></br>
            <br></br>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VoicePlanet;
