import React, { useState, useEffect } from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faarrowright } from "@fortawesome/free-solid-svg-icons";
import javaJpg from "./java.png";
import djangoPng from "./django.png";
import phpPng from "./php.png";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/skills/")
      .then((res) => {
        setSkills(() => [...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="sec container">
        <h4 id="skills" className="display-7">Skills</h4>
        <hr className="hr" />
        <div className="row skills">
          {skills.length !== 0 &&
            skills.map((skill) => (
              <div key={skill['id']} className="col-sm skill">
                <img className="skill-img" src={skill['logo']} alt={skill['skill_name']} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
