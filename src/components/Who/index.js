import React from "react";
import { FaGithub, FaUser } from "react-icons/fa";

const WhoPage = () => {
   return(
    <div className="container" id="who">
    <div className="social about">
      <div className="social_box">
        <FaUser /><br />
      ABout Me
      <hr />
      <div className="about-text">
          Rukundo Kevin is goal oriented , enthusiastic developer with problem solving capabilities and techinical writing skills under his sleeve.
          With over 3 years of experience in front-end and back-end development.
      </div>
      <a href="https://www.github.com/rukundo-kevin" target="blank">
                    <button className="btn github-btn">
                      <FaGithub />
                    View Github Profile 
                  </button>
                </a>

      </div>
    </div>
    <div className="social skills">
        <h2 style={{textAlign: "center"}}>Front-end Skills</h2>
        HTML5
        <div className="skill-bar">
            <div className="bar" id="html"></div>
        </div>
        CSS3
        <div className="skill-bar">
            <div className="bar" id="css"></div>
        </div>
        JS + ES6
        <div className="skill-bar">
            <div className="bar" id="js"></div>
        </div>
        BOOTSTRAP
        <div className="skill-bar">
            <div className="bar" id="bs"></div>
        </div>
          REACT
        <div className="skill-bar">
            <div className="bar" id="react"></div>
        </div>
          SASS
        <div className="skill-bar">
            <div className="bar" id="mocha"></div>
        </div>
          TAILWIND
        <div className="skill-bar">
            <div className="bar" id="express"></div>
        </div>
          D3.JS
        <div className="skill-bar">
            <div className="bar" id="d3"></div>
        </div>
          JQUERY
        <div className="skill-bar">
            <div className="bar" id="c++"></div>
        </div>
    </div>
    <div className="social skills">
                  <h2 style={{textAlign: "center"}}>Back-end Skills</h2>
        EXPRESSJS
        <div className="skill-bar">
            <div className="bar" id="html"></div>
        </div>
        NODEJS
        <div className="skill-bar">
            <div className="bar" id="css"></div>
        </div>
        JS + ES6
        <div className="skill-bar">
            <div className="bar" id="js"></div>
        </div>
          NEXTJS
        <div className="skill-bar">
            <div className="bar" id="bs"></div>
        </div>
          PHP7
        <div className="skill-bar">
            <div className="bar" id="react"></div>
        </div>
          LARAVEL
        <div className="skill-bar">
            <div className="bar" id="nodejs"></div>
        </div>
          C
        <div className="skill-bar">
            <div className="bar" id="d3"></div>
        </div>
          TESTING(MOCHA/CHAI)
        <div className="skill-bar">
            <div className="bar" id="mocha"></div>
        </div>
          C++
        <div className="skill-bar">
            <div className="bar" id="c++"></div>
        </div>
    </div>
  </div>
   )
}

export default WhoPage;
