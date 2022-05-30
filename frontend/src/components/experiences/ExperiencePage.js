import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./experiences.css";
import OtherNavbar from "../navbar/OtherNav";

const ExperiencePage = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setisLoading] = useState(true); // For detecting end of scrolling
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        setExperiences((prev) => [...res.data]);
        // console.log(projects[0]);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="sec container" style={{marginTop: '60px'}}>
      <OtherNavbar />
      <header id="allExperiences">
        <button
          className="btn goback"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa fa-angle-left"></i> Go back
        </button>
        <h4>Experiences</h4>
      </header>
      <hr className="hr" />
      <div className="row">
        {experiences.length !== 0 &&
          experiences.map((experience) => (
            <div key={experience["id"]} className="col-sm experience">
              {/* <img className="project-pic" src={"../" + project["image"]} /> */}
              <h5>{experience["position"]}</h5>
              <div className="company">
                <p>{experience["company"]}</p>
                {experience["date_range"] !== "" && (
                  <p className="date">{experience["date_range"]}</p>
                )}
              </div>
              <div className="texts">{experience["description"]}</div>
              <ul>
                {experience["tasks"] !== "" &&
                  experience["tasks"]
                    .split("\n")
                    .map((task) => <li className="experience-task">{task}</li>)}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ExperiencePage;
