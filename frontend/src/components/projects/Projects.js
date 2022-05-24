import React, { useRef, useState, useEffect } from "react";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faarrowright } from "@fortawesome/free-solid-svg-icons";
// import imges from "./img.jpg";
import Skills from "../skills/Skills.js";
import SpecificProject from "./SpecificProject.js";
import $ from "jquery";
import axios from "axios";
console.log("Hello World");

const Projects = () => {
  const scrl = useRef();
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [isLoading, setisLoading] = useState(true); // For detecting end of scrolling
  const [openModal, setModal] = useState(false);

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

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("projects/")
      .then((res) => {
        setProjects((prev) => [...res.data["Projects"]]);
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
    if (txt.length > 200) {
      return txt.slice(0, 200) + ".....";
    } else {
      return txt;
    }
  };

  const popModal = () => {
    setModal(true);
    alert("Hello");
  }
  // console.log
  return (
    <div>
      <SpecificProject modal={openModal}/>
      <div className="sec container">
      <h4 className="display-7">Projects</h4>
        <hr className="hr" />
        <div className="proj-wrapper">
          {scrollX !== 0 && (
            <button className="swipe-left" onClick={() => slide(-320)}>
              <i className="fa fa-angle-left"></i>
            </button>
          )}
          <div
            id="projects"
            className="projects container-fluid"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {projects.length !== 0 &&
              projects.map((project) => (
                <div onClick={popModal} className="project">
                  <div key={project["id"]}>
                    <img className="project-pic" src={project["image"]} />
                    <h5>{project["project_name"]}</h5>
                    <div className="texts">{sliceText(project["details"])}</div>
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
  );
};

export default Projects;
