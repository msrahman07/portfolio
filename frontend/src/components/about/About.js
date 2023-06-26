import React, {useEffect, useState} from "react";
import "./about.css";
import propic from "./propic.jpg";
import api from "../api";
import axios from "axios";

const About = () => {
  const [bio, setBio] = useState({});
  useEffect(() => {
    axios
      .get(api.ABOUT_URL)
      .then((res) => {
        console.log(res.data['result'][0]);
        setBio({...res.data['result'][0]});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section id="about" className="sec container">
      <div className="jumbotron">
        <div className="details">
          <img className="img-fluid pro-photo" alt="profile" src={propic} />
          <div className="about">
            <h3 className="display-7">{bio['name']}</h3>
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
        <div className="sec">
          <h5>About me</h5>
          <hr className="hr" />
          {bio['aboutMe']}
        </div>
        <div className="sec">
          <h5>About this site</h5>
          <hr className="hr" />
          {bio['aboutSite']}
          {/* This site is developed using <strong>
            React, Html, CSS, Jquery
          </strong>{" "}
          for the frontend and <strong>Django</strong> in the backend for
          content management. */}
        </div>
      </div>
    </section>
  );
};

export default About;
