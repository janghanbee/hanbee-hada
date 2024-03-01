import React, { useState } from 'react';
import './home.css';
// import { BrowserView, MobileView } from 'react-device-detect'

const Home = () => {
  const [profession, setProfession] = useState("developer");

  const handleHover = (newProfession) => {
    setProfession(newProfession);
  };

  return (
    <div>
      <div className="title-container">
        <div className="title-box">
          <img src="img/mainImage.png" alt="Hanbee Jang" className="title-image" />
          <div className="title">I'm a {profession}<br />Hanbee Jang</div>
        </div>
      </div>
      <div className="box-container">
        <div className="box" id="box1" onMouseEnter={() => handleHover("developer")}>DEVELOPER</div>
        <div className="box" id="box2" onMouseEnter={() => handleHover("designer")}>DESIGNER</div>
        <div className="box" id="box3" onMouseEnter={() => handleHover("researcher")}>RESEARCHER</div>
      </div>
      <div className="subtitle-container">
      <div className="subtitle-textbox"><div className="subtitle">
          I’m interested in <span className="highlight-reverse">VR/AR</span>, <span className="highlight">computer vision</span>,
          <br className="br-small" />
          <span className="highlight-reverse">web development</span> and <span className="highlight">computer graphics</span>
        </div></div>
      </div>
    </div>
  );
};

// Helper function to get color based on profession
// const getColor = (profession) => {
//   switch (profession) {
//     case 'developer':
//       return '#000000'; // black color for developer
//     case 'designer':
//       return '#FF0000'; // red color for designer
//     case 'researcher':
//       return '#0000FF'; // blue color for researcher
//     default:
//       return '#000000'; // default color
//   }
// };

export default Home;
