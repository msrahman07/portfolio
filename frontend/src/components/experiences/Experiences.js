import React, { useRef, useState, useEffect } from "react";
import "./specExp.css";
import "./experiences.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faarrowright } from "@fortawesome/free-solid-svg-icons";
// import imges from "./img.jpg";
import $ from "jquery";
import axios from "axios";
import ExperienceModal from "../../context/exp-modal-ctx.js";
import SpecificExperience from "./SpecificExperience.js";
import {Link} from "react-router-dom";
export default function Experiences() {
  // const []
  const [experiences, setExperiences] = useState([]);
  const scrl = useRef();
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [isLoading, setisLoading] = useState(true); // For detecting end of scrolling
  const [modal, setModal] = useState(false); // For detecting
  const [currentExp, setCurrentExp] = useState({}); // For detecting
  useEffect(() => {
    axios
      .get("/experiences")
      .then((res) => {
        setExperiences([...res.data["Experiences"]]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const sliceText = (txt) => {
    if (txt.length > 80) {
      return txt.slice(0, 80) + ".....";
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

  const onClickHandler = (exp) => {
    popModal();
    setCurrentExp(exp);
  };

  return (
    <ExperienceModal.Provider
      value={{
        modalOpen: modal,
        modalClose: closeModal,
      }}
    >
      {modal == true && (
        <SpecificExperience
          currExp_postion={currentExp["position"]}
          currExp_company={currentExp["company"]}
          currExp_tasks={currentExp["tasks"]}
        />
      )}
      <div className="sec container">
        <header className="proj-title">
          <h4 id="experiences" className="display-7">
            Experiences
          </h4>
          <p className="exp-link">
            <Link to="/experiences">See all</Link>
          </p>
        </header>

        <hr className="hr" />
        <div className="exp-wrapper">
          {scrollX !== 0 && (
            <button className="swipe-left" onClick={() => slide(-320)}>
              <i className="fa fa-angle-left"></i>
            </button>
          )}
          <div
            id="experiences"
            className="experiences container-fluid"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {experiences.length !== 0 &&
              experiences.map((experience) => (
                <div
                  onClick={() => onClickHandler(experience)}
                  key={experience["id"]}
                  className="experience"
                >
                  <header className="exp-header">
                    <h5>{experience["position"]}</h5>
                    <div className="company">
                      <p>{experience["company"]}</p>
                      {experience["date_range"] !== "" && <p className="date">{experience["date_range"]}</p>}
                    </div>
                  </header>
                  <div className="texts">
                    {sliceText(experience["description"])}
                  </div>
                </div>
              ))}

            {/* {projects.length !== 0 &&
              projects.map((project) => (
                <div key={project["id"]} className="project">
                  <img className="project-pic" src={project["image"]} />
                  <h5>{project["project_name"]}</h5>
                  <div className="texts">{project["details"]}</div>
                </div>
              ))} */}
          </div>
          {!scrolEnd && (
            <button className="swipe-right" onClick={() => slide(320)}>
              <i className="fa fa-angle-right"></i>{" "}
            </button>
          )}
        </div>
      </div>
    </ExperienceModal.Provider>
  );
}
