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
        <div className="social" >
          <a href="https://github.com/msrahman07" className="github" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.facebook.com/mdshahriar.rahmansakib/" className="facebook" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/msrahman07/" className="linkedin" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
};

export default About;
