import React from 'react';

const Multidreamer = () => {
  return (
    <div>
      <h1 className="header">MultiDreamer</h1>
      <div className="project-container">
        <div className="project-textbox">
            <div className="project-description">
            MultiDreamer is a method for reconstructing a 3D scene comprising multiple objects from a single-view multi-object image. 
            We enhance 3D mesh accuracy by independently generating meshes for individual objects, utilizing inpainting for obscured regions, and optimizing mesh alignment using the depth map.
            <br></br>
            <br></br>
            <img src="img/multidreamer-1.jpg" alt="multidreamer" />
            <br></br>
            Our pipeline produces robust 3D scenes for arbitrary objects without training process. 
            Experimental analysis results demonstrate that our pipeline consistently captures the shapes and relative positions of multiple objects compared to the baseline model. 
            <br></br>
            <br></br>
            Check our demo link! <a href="https://multidreamer-demo.web.app/">https://multidreamer-demo.web.app</a>
            <br></br>
            The code is available at: <a href="https://github.com/HaeChan0305/MultiDreamer/">https://github.com/HaeChan0305/MultiDreamer</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Multidreamer;
