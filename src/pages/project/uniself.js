import React from 'react';

const Uniself = () => {
  return (
    <div>
      <h1 className="header">UniSelf</h1>
      <div className="project-container">
        <div className="project-textbox">
            <div className="project-description">
            Uniself is the best data visualization tool for those who want to become “better me” by managing their lives in healthy way. 
            It helps individuals achieve their routines on long-term growth journey without being demotivated or giving up. 
            From the very first step the user set the routine to the aimed moment that routine becomes the part of her naturally, Uniself support users in their perspective view.
            <br></br>
            <br></br>
            <img src="img/uniself.png" alt="UniSelf" />
            <br></br>
            Entering our website, the user can see the list of entire routines she has, and the wavy motion underneath those. 
            Wavy motion gives some feeling of variability of achievements and possibility of change in the user. 
            We expect the cosy and comfy mood encourages users to keep using our service. 
            Several users gave comments that look and feel of the website is good and wavy moving shape is cool and beautiful.
            <br></br>
            <br></br>
            <img src="img/uniself-2.png" alt="UniSelf" />
            <br></br>
            In Timezone pages, we want all the elements in the screen make a natural harmony. 
            There are bunch of data and information, so balance is important to let user easily comprehend the context and meanings of those. 
            So we decided to selectively provide information depending on user action. 
            The calendar shows user’s daily achievements trend vaguely by differentiating color saturation and decludes anything else by default. 
            It allows us to convey the desired meaning clearer with an explorative manner. 
            The underneath data contents match with the combo-checker. 
            However, the biggest difference between them is the way of grouping. 
            Calendar groups the achievement by date, and combo-checker do the same thing by routine. 
            These two show the achievement trends in different but relevant perspective. 
            In this way, the timezone sub pages are well-designed to show the overall recent trend at a glance.
            <br></br>
            <br></br>
            <img src="img/uniself-3.png" alt="UniSelf" />
            <br></br>
            To check the specific data of each routine more in detail, in the case of calendar, user can hover the mouse on each date chip. 
            Second way is related to the next topic; going into the Routine page by clicking the routine name shown in main page and combo-checker. 
            Each routine has its own page consisting of 2 graphs. 
            Achievement Level Flow graph shows the overall achievement with area chart, being aggregated weekly. 
            Whereas the combo-checker in the timezone subpage shows only the successive number of dates, the flow graph displays all the data without omission. 
            And THAT’s the beauty of routine page. Now it not only shows the abstract selected data in free forms but also describe all the data in more data-visualization-like ways.
            <br></br>
            <br></br>
            <img src="img/uniself-4.png" alt="UniSelf" />
            <br></br> 
            To check the numeric data of day by day, user can see the Details graph. 
            This is the graph that close to the raw data the most in our service. 
            Its background color indicates the goal range intuitively and whether the marker is within that area or not corresponds to the achievement. 
            Because the data keeps piled up infinitely, both flow and details graph support slider feature so that the user can look more detail of a certain period.
            <br></br>
            <br></br>
            <img src="img/uniself-5.png" alt="UniSelf" />
            <br></br> 
            Uniself motivates users to keep the routine, of course with data. 
            And Uniself utilize both weak-tie and strong-tie relationships for it. 
            The user can compare her flow with others via 'view others' feature in the flow graph. 
            Here, the average data of unknown others with the same routine is provided. 
            On the other hand, data of known friends are shown in the Companion page. 
            The user can see others’ achievement flow of past 7 days and compare with her data. 
            As described so far, Uniself is structured hierarchically; Main-Sub-Routine pages. 
            Since the level of abstraction is clearly different, the feeling and meaning of each page can be distinguished well from each other.
            <br></br>
            <br></br>
            Feel free to explore! <a href="https://cs481-uniself.web.app/">https://cs481-uniself.web.app/</a>
            {/* <br></br>
            <br></br>
            <hr />
            <br></br>
            Team Project
            <br></br>
            Skill: Figma, React */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Uniself;
