import React, { useRef, useState, useEffect } from "react";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faarrowright } from "@fortawesome/free-solid-svg-icons";
// import imges from "./img.jpg";
import Skills from "../skills/Skills.js";
import SpecificProject from "./SpecificProject.js";
import $ from "jquery";
import axios from "axios";
import Modal from "@mui/material/Modal";
import "./specProj.css";
import ProjectModal from "../../context/proj-modal-ctx.js";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import {motion } from "framer-motion"

const Projects = React.memo(() => {
  const scrl = useRef();
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [isLoading, setisLoading] = useState(true); // For detecting end of scrolling
  const [modal, setModal] = useState(false); // For detecting end of scrolling
  const [currentProject, setCurrentProject] = useState({}); // For detecting end of scrolling
  const [projects, setProjects] = useState([]);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    //For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  useEffect(() => {
    //Check width of the scollings
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);


  useEffect(() => {
    axios
      .get("projects/")
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
  const sliceText = (txt) => {
    if (txt.length > 150) {
      return txt.slice(0, 150) + ".....";
    } else {
      return txt;
    }
  };

  const popModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const loadProjects = (txt) => {
    console.log(txt);
  };
  const onclickEvent = (proj) => {
    popModal();
    setCurrentProject(proj);
  };
  console.log(projects);
  return (
    <ProjectModal.Provider
      value={{
        modalOpen: modal,
        modalClose: closeModal,
      }}
    >
      <div>
        {modal == true && (
          <SpecificProject
            currProj_name={currentProject["project_name"]}
            currProj_tectstack={currentProject["tech_stack"]}
            currProj_tasks={currentProject["tasks"]}
          />
        )}
        {/* cannot pass object, break it down */}
        <div className="sec container">
          <header className="proj-title">
            <h4 id="projects" className="display-7">
              Projects
            </h4>
            <p className="proj-link"><Link to="/projects">See all</Link></p>
          </header>

          <hr className="hr" />
          <div className="proj-wrapper">
            {scrollX !== 0 && (
              <button className="swipe-left" onClick={() => slide(-320)}>
                <i className="fa fa-angle-left"></i>
              </button>
            )}
            <div
              className="projects container-fluid"
              ref={scrl}
              onScroll={scrollCheck}
            >
              {projects.length !== 0 &&
                projects.map((project) => (
                  <div
                    key={project["id"]}
                    onClick={() => onclickEvent(project)}
                    className="project"
                  >
                    <div>
                      <img className="project-pic" src={project["image"]} />
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
                      <div className="texts">
                        {sliceText(project["details"])}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {!scrolEnd && (
              <button className="swipe-right" onClick={() => slide(320)}>
                <i className="fa fa-angle-right"></i>{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </ProjectModal.Provider>
  );
});

export default Projects;
