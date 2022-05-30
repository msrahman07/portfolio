import React, { useState, useEffect } from "react";
import "./skills.css";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("/skills")
      .then((res) => {
        setSkills(() => [...res.data]);
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
          {(skills !== undefined && skills.length !== 0) &&
            skills.map((skill) => (
              <div key={skill['id']} className="col skill">
                {/* <img className="skill-img" src={skill['logo']} alt={skill['skill_name']} /> */}
                {skill['skill_name']}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
