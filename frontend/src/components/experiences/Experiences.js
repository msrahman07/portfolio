import React, { useRef, useState, useEffect } from "react";
import "./experiences.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faarrowright } from "@fortawesome/free-solid-svg-icons";
// import imges from "./img.jpg";
import $ from "jquery";
import axios from "axios";

export default function Experiences() {
  const scrl = useRef();
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [isLoading, setisLoading] = useState(true); // For detecting end of scrolling

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
  return (
    <div>
      <div className="sec container">
        <h4 className="display-7">Projects</h4>
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
            <div className="experience">
              <h5>New Experiences</h5>
              <div className="texts">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem
              </div>
            </div>
            <div className="experience">
              <h5>New Experiences</h5>
              <div className="texts">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem
              </div>
            </div>
            <div className="experience">
              <h5>New Experiences</h5>
              <div className="texts">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem
              </div>
            </div>
            <div className="experience">
              <h5>New Experiences</h5>
              <div className="texts">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem
              </div>
            </div>
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
    </div>
  );
}
