import React from 'react';
import YouTube from 'react-youtube';
import './project.css';

const GsDCQG = () => {
  return (
    <div>
    <h1 className="header">Graph-based Semantic DCQG</h1>
    <div className="project-container">
      <div className="project-textbox">
          <div className="project-description">
            <YouTube className="player"
                videoId="au-ftOHFKE8"
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
            This paper proposes several methods that can develop the performance of the existing Difficulty Controllable Question Generation (DCQG) system. 
            In the previous DCQG system, there was a limitation in generating only syntactically complex or simple questions by defining difficulty by simply the number of inference steps. 
            We introduce question paraphrasing and context simplification to make the difference in the semantic difficulty of questions more noticeable. In our work, we propose a new semantic difficulty controllable question generation model that can control semantic question difficulty rather than syntactical difficulty.
            <br></br>
            <br></br>
            The code is available at: <a href="https://github.com/janghanbee/CS475_SemanticDCQG">https://github.com/janghanbee/CS475_SemanticDCQG</a>
          </div>
      </div>
    </div>
  </div>
  );
};

export default GsDCQG;
