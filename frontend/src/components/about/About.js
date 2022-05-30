import React from "react";
import "./about.css";
import propic from "./propic.jpg";
const About = () => {
  return (
    <section id="about" className="sec container">
      <div className="jumbotron">
        <div className="details">
          <img className="img-fluid pro-photo" alt="profile" src={propic} />
          <div className="about">
            <h3 className="display-7">Md Shahriar Rahman</h3>
            <div className="degree">Bsc, Computing Science</div>
            <div className="school">
              <a href="https://sfu.ca" target="_blank" rel="noreferrer">
                Simon Fraser University
              </a>
            </div>
            <div className="location">British Columbia, Canada</div>
          </div>
        </div>

        <div className="social">
          <a
            href="https://github.com/msrahman07"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/mdshahriar.rahmansakib/"
            className="facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/msrahman07/"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="sec">
          I am a full stack software developer experienced in various
          programming languages and frameworks. Welcome to my portfolio.
        </p>
        <p className="sec">
          This site is developed using <strong>React, Html, CSS, Jquery</strong> for the frontend
          and <strong>Django</strong> in the backend for content management.
        </p>
      </div>
    </section>
  );
};

export default About;
