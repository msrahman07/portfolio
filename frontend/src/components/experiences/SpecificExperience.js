import * as React from "react";
import { useContext } from "react";
import Modal from "@mui/material/Modal";
import "./specExp.css";
import "./experiences.css";
import ExperienceModal from "../../context/exp-modal-ctx.js";

const SpecificExperience = (props) => {
  const ctx = useContext(ExperienceModal);
  let tasks = [];
  if (props.currExp_tasks) {
    tasks = props.currExp_tasks;
    // setprojectTasks([[], ...tasks]);
    // console.log(tasks);
  }
  return (
    <div>
      {/* {console.log(tasks)} */}
      <Modal
        sx={{ opacity: 1, margin: 'auto', maxWidth:'500px' }}
        open={ctx.modalOpen}
        onClose={ctx.modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ outline: "none" }} className="container">
          <div className="exp-sec">
            <header className="expHeader">
              <h5>{props.currExp_postion}</h5>
              <button className="btn" onClick={ctx.modalClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </header>
            <div className="company">
              <p>{props.currExp_company}</p>
            </div>
            <ul>
                {tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SpecificExperience;
