import React, { useRef, useState, useEffect } from "react";
import "./projects.css";
// import imges from "./img.jpg";
import SpecificProject from "./SpecificProject.js";
import axios from "axios";
import "./specProj.css";
import ProjectModal from "../../context/proj-modal-ctx.js";
import api from "../api"

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
      .get(api.PROJECT_URL)
      .then((res) => {
        // console.log(res.data['result'][0]['tasks']);
        setProjects((prev) => [...res.data['result']]);
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
    if (txt !== undefined && txt.length > 150) {
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

  const onclickEvent = (proj) => {
    popModal();
    setCurrentProject(proj);
  };
  // console.log(projects);
  return (
    <ProjectModal.Provider
      value={{
        modalOpen: modal,
        modalClose: closeModal,
      }}
    >
      <div>
        {modal === true && (
          <SpecificProject
            currProj_name={currentProject["name"]}
            currProj_tectstack={currentProject["tech_stack"]}
            currProj_tasks={currentProject["tasks"]}
            currProj_image={currentProject['image']['asset']['url']}
          />
        )}
        {/* cannot pass object, break it down */}
        <div className="sec container">
          <header className="proj-title">
            <h4 id="projects" className="display-7">
              Projects
            </h4>
            {/* <p className="proj-link">
              <Link to="/projects">See all</Link>
            </p> */}
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
              {(projects.length !== 0 && projects !== undefined) && projects.map((project) => (
                  <div
                    key={project["_id"]}
                    onClick={() => onclickEvent(project)}
                    className="project"
                  >
                    <div>
                      <img
                        className="project-pic"
                        src={project['image']['asset']['url']}
                        alt="project"
                      />
                      <h5>{project["project_name"]}</h5>
                      {project["github"] !== "" && (
                        <span className="project-links">
                          <a
                            href={project["github"]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            github
                          </a>
                        </span>
                      )}
                      {/* {project["demo_link"] !== "" && (
                        <span>
                          <a
                            href={project["demo_link"]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            demo
                          </a>
                        </span>
                      )} */}
                      <div className="texts">
                        {project["details"] !== "" &&
                          sliceText(project["details"])}
                      </div>
                    </div>
                  </div>
                ))}
                {projects.length === 0 && <div></div>}
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
