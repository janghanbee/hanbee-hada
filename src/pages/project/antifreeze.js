import React from 'react';
import YouTube from 'react-youtube';
import './project.css';

const Antifreeze = () => {
  return (
    <div>
      <h1 className="header">Kinetic Typography - ANTIFREEZE</h1>
      <div className="project-container">
        <div className="project-textbox">
            <div className="project-description">
              <YouTube className="player"
                  videoId="_h9zlnCNx58"
                  opts={{
                    width: "100%",
                    playerVars: {
                      autoplay: 1,
                      rel: 0,
                      modestbranding: 1,
                    },
                  }}
                  onEnd={(e)=>{e.target.stopVideo(0);}}      
                />
              <br></br>
              (Will be changed later)
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

export default Antifreeze;
