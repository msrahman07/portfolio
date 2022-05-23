import React from "react";
import about from "./about.css";
import propic from "./propic.jpg";
const About = () => {
  return (
    <section className="sec container">
      <div className="jumbotron">
        <div className="details">
          <img className="img-fluid pro-photo" src={propic} />
          <div className="about">
            <h3 className="display-7">Md Shahriar Rahman</h3>
            <div className="degree">Bsc, Computing Science</div>
            <div className="school"><a href="https://sfu.ca" target="_blank">Simon Fraser University</a></div>
            <div className="location">British Columbia, Canada</div>
          </div>
        </div>
        {/* <p className="lead">
          I am a software developer experienced in various programming languages
          and frameworks. Welcome to my portfolio.
        </p> */}
        <div className="hello" >Hello</div>
      </div>
    </section>
  );
};

export default About;
