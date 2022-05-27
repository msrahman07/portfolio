import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./projects.css";
import $ from "jquery";
import OtherNavbar from "../navbar/OtherNav";

const ProjectPage = (props) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setisLoading] = useState(true); // For detecting end of scrolling
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        setProjects((prev) => [...res.data]);
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
    <div className="sec container" style={{ marginTop: "60px" }}>
      <OtherNavbar />
      <header id="allProjects">
        <button
          className="btn goback"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa fa-angle-left"></i> Go back
        </button>
        <h4>Projects</h4>
      </header>
      <hr className="hr" />
      <div className="row">
        {projects.length !== 0 &&
          projects.map((project) => (
            <div key={project["id"]} className="col-sm project">
              {/* <img className="project-pic" src={"../" + project["image"]} /> */}
              <h5>{project["project_name"]}</h5>
              {project["github_url"] !== "" && (
                <span className="project-links">
                  <a href={project["github_url"]} target="_blank">
                    github
                  </a>
                </span>
              )}
              {project["demo_link"] !== "" && (
                <span>
                  <a href={project["demo_link"]} target="_blank">
                    demo
                  </a>
                </span>
              )}
              <div className="texts">{project["details"]}</div>
              <ul>
                {project["tasks"] !== "" &&
                  project["tasks"]
                    .split("\n")
                    .map((task) => <li className="project-task">{task}</li>)}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProjectPage;
