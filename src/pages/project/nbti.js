import React from 'react';

const NBTI = () => {
  return (
    <div>
      <h1 className="header">NBTI</h1>
      <div className="project-container">
        <div className="project-textbox">
            <div className="project-description">
            We proposed an NN-based typography model NBTI that can visually represent letters, reflecting the meanings inherent in both concrete and formless words well. 
            <br></br>
            <br></br>
            <img src="img/nbti-1.jpg" alt="NBTI" />
            <br></br>
            Our focus was on overcoming the limitations of the previous paper, "Word as Image," and presenting future directions. 
            In the previous paper, the excessive deformation of characters made them unreadable, so the degree of geometric deformation was measured to prevent this. 
            However, this approach limited the expressive capabilities of the characters. 
            We shifted our focus to the readability of the characters. 
            Instead of simply comparing geometric values, we employed a visual model that compared encoded vectors to evaluate how well the characters were recognized, using a metric called "Embedding Loss." 
            <br></br>
            <img src="img/nbti-2.png" alt="NBTI" />
            Furthermore, the previous model faced challenges in visualizing shapeless words. 
            To address this, we introduced a preprocessing step using LLM fine-tuning to transform these shapeless words into words with concrete forms. 
            We named the module responsible for this transformation the "Concretizer." 
            We used the GPT 3.5 model, specifically the text-davinci-003 variant, and fine-tuned it with 427 datasets. 
            The hyperparameters used for fine-tuning were as follows. 
            The Concretizer module transforms abstract and shapeless words like "Sweet" and "Idea" into words with clear forms like "Candy" and "Lightbulb."
            <br></br>
            <br></br>
            The code is available at: <a href="https://github.com/DoojinBaek/CS470_NBTI">https://github.com/DoojinBaek/CS470_NBTI</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NBTI;
